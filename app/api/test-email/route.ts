import { NextResponse } from 'next/server';
import { testEmailConfiguration } from '@/lib/email';

// Test endpoint to verify email configuration
export async function GET() {
  // Only allow in development/test environments
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ 
      success: false, 
      message: 'Test endpoint not available in production' 
    }, { status: 404 });
  }

  try {
    const result = await testEmailConfiguration();
    
    return NextResponse.json(result, { 
      status: result.success ? 200 : 400 
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Test endpoint error',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}