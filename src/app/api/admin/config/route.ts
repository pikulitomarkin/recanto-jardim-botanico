import { NextRequest, NextResponse } from 'next/server'
import { getSiteConfig, updateConfig } from '@/lib/storage'
import { verifyToken } from '@/lib/auth'
import { Facility, Room } from '@/types'

export async function PUT(request: NextRequest) {
  const auth = verifyToken(request)
  if (!auth.valid) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  let body: { logo?: { driveId: string; driveUrl: string }; facilities?: Facility[]; rooms?: Room[] }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const config = await getSiteConfig()
  const partial: Partial<typeof config> = {}
  if (body.logo !== undefined) partial.logo = body.logo
  if (body.facilities !== undefined) partial.facilities = body.facilities
  if (body.rooms !== undefined) partial.rooms = body.rooms

  await updateConfig(partial)
  return NextResponse.json({ ok: true })
}
