import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { signToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  let body: { password?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { password } = body
  if (!password) {
    return NextResponse.json({ error: 'Password required' }, { status: 400 })
  }

  const hash = createHash('sha256').update(password).digest('hex')
  const expected = process.env.ADMIN_PASSWORD_HASH ?? ''

  if (!expected || hash !== expected) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const exp = Math.floor(Date.now() / 1000) + 8 * 60 * 60
  const token = signToken({ sub: 'admin', exp })

  return NextResponse.json({ token })
}
