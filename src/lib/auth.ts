import { createHmac } from 'crypto'

function base64url(input: string | Buffer): string {
  const buf = typeof input === 'string' ? Buffer.from(input) : input
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function base64urlDecode(input: string): string {
  const padded = input.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((input.length + 3) % 4)
  return Buffer.from(padded, 'base64').toString('utf8')
}

const SECRET = process.env.ADMIN_JWT_SECRET ?? 'fallback-dev-secret'

export function signToken(payload: Record<string, unknown>): string {
  const header = base64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const body = base64url(JSON.stringify(payload))
  const signature = createHmac('sha256', SECRET)
    .update(`${header}.${body}`)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
  return `${header}.${body}.${signature}`
}

export function verifyToken(request: Request): { valid: boolean; payload?: Record<string, unknown> } {
  const auth = request.headers.get('Authorization') ?? ''
  if (!auth.startsWith('Bearer ')) return { valid: false }
  const token = auth.slice(7)

  const parts = token.split('.')
  if (parts.length !== 3) return { valid: false }

  const [header, body, signature] = parts
  const expected = createHmac('sha256', SECRET)
    .update(`${header}.${body}`)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')

  if (expected !== signature) return { valid: false }

  let payload: Record<string, unknown>
  try {
    payload = JSON.parse(base64urlDecode(body))
  } catch {
    return { valid: false }
  }

  if (typeof payload.exp === 'number' && payload.exp < Math.floor(Date.now() / 1000)) {
    return { valid: false }
  }

  return { valid: true, payload }
}
