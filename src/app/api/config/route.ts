import { NextResponse } from 'next/server'
import { getSiteConfig } from '@/lib/storage'

export async function GET() {
  const config = await getSiteConfig()
  return NextResponse.json({
    facilities: config.facilities,
    logo: config.logo,
  })
}
