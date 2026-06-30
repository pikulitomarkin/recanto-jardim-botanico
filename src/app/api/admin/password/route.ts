import { NextRequest, NextResponse } from 'next/server'
import { updateConfig } from '@/lib/storage'
import { verifyToken } from '@/lib/auth'

export async function PUT(request: NextRequest) {
  const auth = verifyToken(request)
  if (!auth.valid) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  let body: { newPasswordHash?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.newPasswordHash) {
    return NextResponse.json({ error: 'newPasswordHash required' }, { status: 400 })
  }

  await updateConfig({ adminPasswordHash: body.newPasswordHash })
  return NextResponse.json({ ok: true })
}
