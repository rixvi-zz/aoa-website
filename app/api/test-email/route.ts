import { NextRequest, NextResponse } from 'next/server';
import { testEmailConfiguration } from '@/lib/email';

export async function GET() {
  try {
    console.log('[TEST_EMAIL_API] Starting email configuration test...');
    
    const result = await testEmailConfiguration();
    
    console.log('[TEST_EMAIL_API] Test result:', result);
    
    return NextResponse.json(result, {
      status: result.success ? 200 : 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
  } catch (error) {
    console.error('[TEST_EMAIL_API] Unexpected error:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Test failed with unexpected error',
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined
    }, {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}