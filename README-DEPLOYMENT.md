# Contact Form Deployment Guide

This guide covers the setup and deployment of the AOA Foods contact form with Resend email integration.

## Overview

The contact form implementation includes:
- Secure backend API with Next.js App Router
- Resend email service integration
- Input validation and sanitization
- Rate limiting and spam protection
- Honeypot bot detection
- Professional HTML email templates

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Email Service Configuration
RESEND_API_KEY=re_your_resend_api_key_here
CONTACT_EMAIL=aoafoodsind@gmail.com

# Optional: Google Analytics and Search Console
NEXT_PUBLIC_GA_ID=your_ga_measurement_id
GOOGLE_SITE_VERIFICATION=your_verification_code
```

## Setup Instructions

### 1. Resend Account Setup

1. Visit [Resend.com](https://resend.com) and create an account
2. Navigate to your dashboard and create an API key
3. Copy the API key and add it to your environment variables as `RESEND_API_KEY`

### 2. Domain Verification (Important)

**Current Setup**: The system is configured to send emails from `noreply@aoafoods.com`

**For Production**: You need to verify your domain with Resend:

1. In your Resend dashboard, go to "Domains"
2. Add your domain: `aoafoods.com`
3. Follow the DNS configuration instructions provided by Resend
4. Add the required DNS records to your domain:
   - SPF record
   - DKIM record
   - DMARC record (recommended)

**DNS Records Example**:
```
Type: TXT
Name: @
Value: "v=spf1 include:_spf.resend.com ~all"

Type: TXT  
Name: resend._domainkey
Value: [DKIM key provided by Resend]

Type: TXT
Name: _dmarc
Value: "v=DMARC1; p=quarantine; rua=mailto:dmarc@aoafoods.com"
```

### 3. Environment Configuration

**Development**:
```env
RESEND_API_KEY=re_your_development_api_key
CONTACT_EMAIL=test@yourdomain.com
NODE_ENV=development
```

**Production** (Vercel):
```env
RESEND_API_KEY=re_your_production_api_key
CONTACT_EMAIL=aoafoodsind@gmail.com
NODE_ENV=production
```

### 4. Vercel Deployment

1. Push your code to GitHub/GitLab
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add each required environment variable

### 5. Testing the Implementation

#### Local Testing:
```bash
npm run dev
```
Visit `http://localhost:3000/contact` and test the form.

#### Production Testing:
1. Deploy to Vercel
2. Visit your live site's contact page
3. Submit a test form
4. Check that emails are received at your configured email address

#### API Testing:
You can test the API directly:
```bash
curl -X POST https://your-domain.com/api/contact \
  -F "name=Test User" \
  -F "email=test@example.com" \
  -F "company=Test Company" \
  -F "country=United States" \
  -F "message=This is a test message from the API"
```

## Security Features

### Rate Limiting
- Maximum 5 requests per 15-minute window per IP
- Blocked IPs are banned for 1 hour after exceeding the limit

### Spam Protection
- Honeypot field detection
- Content analysis for suspicious patterns
- URL and keyword filtering
- Input sanitization with DOMPurify

### Data Validation
- Server-side validation of all fields
- Email format validation
- Phone number format validation (optional field)
- Message length requirements
- XSS and injection prevention

## Email Configuration

### Email Templates
The system sends both HTML and plain text versions of emails with:
- Professional AOA Foods branding
- Complete contact details
- Submission metadata (timestamp, IP, user agent)
- Reply-to functionality

### Email Delivery
- Emails are sent from: `noreply@aoafoods.com`
- Replies go directly to the customer's email
- Tagged for tracking and organization

## Enhanced Error Handling & Logging

The contact form API now includes comprehensive error handling and logging:

### Error Categories & Logging:

1. **Rate Limit Errors** - Logged with client details and timing
2. **Validation Errors** - Logged with field-specific error details  
3. **Spam Detection** - Logged with spam scores and reasons
4. **Email Service Errors** - Detailed Resend API error logging
5. **Unexpected Exceptions** - Full context and stack trace logging

### Development vs Production Responses:

**Development Mode** (NODE_ENV=development):
- Complete error details in API responses
- Stack traces in logs
- Full context information
- Detailed Resend error messages

**Production Mode** (NODE_ENV=production):
- Generic user-friendly error messages
- Detailed server logs (for monitoring)
- No sensitive information exposed
- Security-focused responses

### Log Format Examples:

**Rate Limit Error:**
```log
[CONTACT_API_ERROR] RATE_LIMIT_EXCEEDED: {
  "timestamp": "2024-01-15T10:30:00.000Z",
  "type": "RATE_LIMIT_EXCEEDED", 
  "clientId": "192.168.1.1",
  "remaining": 0,
  "resetTime": 1705314600000
}
```

**Email Service Error:**
```log
[EMAIL_SERVICE_ERROR] RESEND_API_RESPONSE_ERROR: {
  "timestamp": "2024-01-15T10:30:00.000Z",
  "stage": "RESEND_API_RESPONSE_ERROR",
  "customerEmail": "customer@example.com",
  "error": {
    "message": "Domain not verified",
    "code": "forbidden"
  }
}
```

**Successful Submission:**
```log
[CONTACT_API_SUCCESS] Form submitted successfully: {
  "timestamp": "2024-01-15T10:30:00.000Z",
  "customerName": "John Doe",
  "customerEmail": "john@example.com", 
  "customerCountry": "United States",
  "spamScore": 5
}
```

## Changing Email Destination

To change the destination email address:

1. **Update Environment Variable**:
   ```env
   CONTACT_EMAIL=info@aoafoods.com
   ```

2. **Deploy the Change**:
   - Update the environment variable in Vercel dashboard
   - No code changes required

## DNS Records for Email Deliverability

Add these DNS records to improve email deliverability:

```dns
# SPF Record
Type: TXT
Name: @
Value: "v=spf1 include:_spf.resend.com ~all"

# DKIM Record (provided by Resend after domain verification)
Type: TXT
Name: resend._domainkey
Value: [Your DKIM key from Resend dashboard]

# DMARC Record (recommended)
Type: TXT
Name: _dmarc
Value: "v=DMARC1; p=quarantine; rua=mailto:dmarc@aoafoods.com; ruf=mailto:dmarc@aoafoods.com; fo=1"

# Optional: Reverse DNS / PTR record (contact your hosting provider)
```

## Troubleshooting

### Common Issues

1. **Emails not being delivered**:
   - Check RESEND_API_KEY is correctly set
   - Verify domain is verified in Resend dashboard
   - Check DNS records are properly configured

2. **Rate limiting too aggressive**:
   - Modify `RATE_LIMIT_CONFIG` in `lib/rate-limit.ts`
   - Consider implementing user-based rate limiting instead of IP-based

3. **False spam detection**:
   - Adjust spam detection thresholds in `lib/rate-limit.ts`
   - Review and modify suspicious keyword lists

4. **Form not submitting**:
   - Check browser console for JavaScript errors
   - Verify API route is accessible at `/api/contact`
   - Check network tab for request details

### Debug Mode
Enable detailed logging by setting:
```env
NODE_ENV=development
```

### Testing Email Service
Test your email configuration:
```bash
# Development only - test endpoint  
curl http://localhost:3000/api/test-email

# Response example:
{
  "success": true,
  "message": "Email configuration test successful! Check your inbox.",
  "details": {
    "emailId": "re_abc123",
    "recipient": "your-email@domain.com"
  }
}
```

### Common Error Scenarios:

1. **Domain Not Verified**:
```log
[EMAIL_SERVICE_ERROR] RESEND_API_RESPONSE_ERROR: {
  "error": {
    "message": "Domain not verified", 
    "code": "forbidden"
  }
}
```
**Solution**: Verify your domain in Resend dashboard

2. **Invalid API Key**:
```log
[EMAIL_SERVICE_ERROR] RESEND_INITIALIZATION: {
  "error": {
    "message": "Invalid API key"
  }
}
```
**Solution**: Check RESEND_API_KEY is correctly set

3. **Rate Limit Exceeded**:
```log
[CONTACT_API_ERROR] RATE_LIMIT_EXCEEDED: {
  "remaining": 0,
  "resetTime": 1705314600000
}
```
**Solution**: Wait for rate limit to reset or adjust limits

## Support

For issues related to:
- **Resend API**: [Resend Documentation](https://resend.com/docs)
- **Domain verification**: Contact your DNS provider
- **Vercel deployment**: [Vercel Documentation](https://vercel.com/docs)

## Security Recommendations

1. **Regular Updates**: Keep dependencies updated
2. **Monitor Logs**: Regularly check for suspicious activity
3. **Backup Strategy**: Implement form submission logging/backup
4. **SSL Certificate**: Ensure HTTPS is properly configured
5. **Content Security Policy**: Consider implementing CSP headers

## File Structure

```
lib/
├── email.ts          # Email service and templates
├── rate-limit.ts     # Rate limiting and spam detection
├── validations.ts    # Form validation and sanitization
└── utils.ts          # Utility functions

app/api/contact/
└── route.ts          # Contact form API endpoint

components/
└── ContactFormWrapper.tsx  # Contact form component

types/
└── index.ts          # TypeScript type definitions
```

## Package Dependencies

New packages added:
```json
{
  "resend": "^3.0.0",
  "isomorphic-dompurify": "^2.0.0"
}
```

Install with:
```bash
npm install resend isomorphic-dompurify
```