import { NextResponse } from 'next/server'

export async function GET() {
  const verificationText = 'tiktok-developers-site-verification=tBXLwvwppcyqZUPGNlzz74oSUgsgI6n6'
  
  return new NextResponse(verificationText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
} 