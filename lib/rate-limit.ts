// Simple in-memory rate limiting for contact form submissions
// In production, consider using Redis or a database for distributed rate limiting

interface RateLimitEntry {
  requests: number;
  resetTime: number;
}

// Store rate limit data in memory (consider Redis for production)
const rateLimitStore = new Map<string, RateLimitEntry>();

// Rate limit configuration
const RATE_LIMIT_CONFIG = {
  // Maximum requests per window
  maxRequests: 5,
  // Time window in milliseconds (15 minutes)
  windowMs: 15 * 60 * 1000,
  // Block duration in milliseconds (1 hour)
  blockDurationMs: 60 * 60 * 1000
};

// Get client identifier (IP address or user agent hash)
export function getClientId(request: Request): string {
  // Try to get real IP from headers (Vercel/proxy headers)
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  
  const ip = forwarded?.split(',')[0] || 
             realIp || 
             cfConnectingIp || 
             'unknown';
             
  return ip.trim();
}

// Check if request should be rate limited
export function checkRateLimit(clientId: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
  message?: string;
} {
  const now = Date.now();
  const key = `contact-form:${clientId}`;
  
  // Get existing rate limit data
  let entry = rateLimitStore.get(key);
  
  // Clean up expired entries periodically
  if (Math.random() < 0.01) { // 1% chance to clean up
    cleanupExpiredEntries();
  }
  
  // If no entry exists or window has expired, create new entry
  if (!entry || now > entry.resetTime) {
    entry = {
      requests: 0,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs
    };
  }
  
  // Check if client is currently blocked (exceeded rate limit)
  if (entry.requests >= RATE_LIMIT_CONFIG.maxRequests) {
    // If still within block period, deny request
    if (now < entry.resetTime + RATE_LIMIT_CONFIG.blockDurationMs) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: entry.resetTime + RATE_LIMIT_CONFIG.blockDurationMs,
        message: `Too many requests. Please try again later.`
      };
    }
    
    // Block period has expired, reset the entry
    entry = {
      requests: 0,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs
    };
  }
  
  // Increment request count
  entry.requests++;
  rateLimitStore.set(key, entry);
  
  return {
    allowed: true,
    remaining: Math.max(0, RATE_LIMIT_CONFIG.maxRequests - entry.requests),
    resetTime: entry.resetTime
  };
}

// Clean up expired entries to prevent memory leaks
function cleanupExpiredEntries() {
  const now = Date.now();
  
  for (const [key, entry] of rateLimitStore.entries()) {
    // Remove entries that are well past their expiration
    if (now > entry.resetTime + RATE_LIMIT_CONFIG.blockDurationMs) {
      rateLimitStore.delete(key);
    }
  }
}

// Get rate limit headers for API responses
export function getRateLimitHeaders(rateLimit: {
  remaining: number;
  resetTime: number;
}): Record<string, string> {
  return {
    'X-RateLimit-Limit': RATE_LIMIT_CONFIG.maxRequests.toString(),
    'X-RateLimit-Remaining': rateLimit.remaining.toString(),
    'X-RateLimit-Reset': rateLimit.resetTime.toString(),
    'X-RateLimit-Window': RATE_LIMIT_CONFIG.windowMs.toString()
  };
}

// Advanced spam detection (honeypot, suspicious patterns)
export function detectSpam(formData: {
  name: string;
  email: string;
  message: string;
  company?: string;
  honeypot?: string;
}): {
  isSpam: boolean;
  reason?: string;
  score: number; // 0-100, higher = more suspicious
} {
  let spamScore = 0;
  const reasons: string[] = [];
  
  // Check honeypot field
  if (formData.honeypot && formData.honeypot.trim().length > 0) {
    return {
      isSpam: true,
      reason: 'Honeypot field filled (bot detected)',
      score: 100
    };
  }
  
  // Check for excessive URLs in message
  const urlRegex = /(https?:\/\/[^\s]+)/gi;
  const urls = formData.message.match(urlRegex) || [];
  if (urls.length > 2) {
    spamScore += 40;
    reasons.push('Too many URLs in message');
  }
  
  // Check for suspicious keywords
  const spamKeywords = [
    'seo', 'bitcoin', 'crypto', 'loan', 'casino', 'viagra', 
    'weight loss', 'make money', 'click here', 'free money',
    'guaranteed', 'earn money fast', 'work from home'
  ];
  
  const lowerMessage = formData.message.toLowerCase();
  const matchedKeywords = spamKeywords.filter(keyword => 
    lowerMessage.includes(keyword)
  );
  
  if (matchedKeywords.length > 0) {
    spamScore += matchedKeywords.length * 15;
    reasons.push(`Suspicious keywords: ${matchedKeywords.join(', ')}`);
  }
  
  // Check for repetitive characters
  if (/(.)\1{10,}/.test(formData.message)) {
    spamScore += 25;
    reasons.push('Excessive character repetition');
  }
  
  // Check for gibberish (too many consonants without vowels)
  const consonantStreaks = formData.message.match(/[bcdfghjklmnpqrstvwxyz]{6,}/gi);
  if (consonantStreaks && consonantStreaks.length > 2) {
    spamScore += 20;
    reasons.push('Potential gibberish text');
  }
  
  // Check email domain for common spam patterns
  const emailDomain = formData.email.split('@')[1]?.toLowerCase();
  const suspiciousDomains = [
    'tempmail.', '10minutemail.', 'mailinator.', 'guerrillamail.',
    'throwaway.', 'temp-mail.', 'fakeemail.', 'spam.'
  ];
  
  if (emailDomain && suspiciousDomains.some(domain => emailDomain.includes(domain))) {
    spamScore += 30;
    reasons.push('Suspicious email domain');
  }
  
  // Check for very short or very long messages
  if (formData.message.length < 10) {
    spamScore += 15;
    reasons.push('Message too short');
  } else if (formData.message.length > 5000) {
    spamScore += 20;
    reasons.push('Message too long');
  }
  
  // Check name patterns
  if (formData.name.length < 2 || /\d{3,}/.test(formData.name)) {
    spamScore += 10;
    reasons.push('Suspicious name pattern');
  }
  
  return {
    isSpam: spamScore >= 50,
    reason: reasons.length > 0 ? reasons.join('; ') : undefined,
    score: Math.min(100, spamScore)
  };
}