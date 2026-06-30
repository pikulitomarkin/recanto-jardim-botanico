import { NextRequest, NextResponse } from 'next/server'
import { getRooms, updateRooms } from '@/lib/storage'
import { verifyToken } from '@/lib/auth'
import { Room } from '@/types'
import { randomUUID } from 'crypto'

export interface PriceGroup {
  label: string
  price: number
  rooms: Room[]
}

export async function GET() {
  const rooms = await getRooms()

  const grouped = rooms.reduce<Record<number, Room[]>>((acc, room) => {
    if (!acc[room.price]) acc[room.price] = []
    acc[room.price].push(room)
    return acc
  }, {})

  const priceGroups: PriceGroup[] = Object.entries(grouped)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([price, roomList]) => ({
      label: `Quartos R$${Number(price).toLocaleString('pt-BR')}/mês`,
      price: Number(price),
      rooms: roomList,
    }))

  return NextResponse.json({ priceGroups })
}

export async function POST(request: NextRequest) {
  const auth = verifyToken(request)
  if (!auth.valid) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  let body: Omit<Room, 'id'>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const newRoom: Room = { ...body, id: randomUUID() }
  const rooms = await getRooms()
  await updateRooms([...rooms, newRoom])

  return NextResponse.json({ room: newRoom }, { status: 201 })
}

export async function PUT(request: NextRequest) {
  const auth = verifyToken(request)
  if (!auth.valid) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  let body: Room
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.id) return NextResponse.json({ error: 'Room id required' }, { status: 400 })

  const rooms = await getRooms()
  const index = rooms.findIndex((r) => r.id === body.id)
  if (index === -1) return NextResponse.json({ error: 'Room not found' }, { status: 404 })

  const updated = [...rooms]
  updated[index] = body
  await updateRooms(updated)

  return NextResponse.json({ room: body })
}

export async function DELETE(request: NextRequest) {
  const auth = verifyToken(request)
  if (!auth.valid) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'id query param required' }, { status: 400 })

  const rooms = await getRooms()
  const filtered = rooms.filter((r) => r.id !== id)
  if (filtered.length === rooms.length) {
    return NextResponse.json({ error: 'Room not found' }, { status: 404 })
  }

  await updateRooms(filtered)
  return NextResponse.json({ ok: true })
}
