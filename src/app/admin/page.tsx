'use client'

import { useEffect, useState } from 'react'
import { getDriveThumbnailUrl } from '@/lib/gdrive.client'
import { Room, Facility, RoomStatus } from '@/types'

// ─── helpers ─────────────────────────────────────────────────────────────────

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

const TOKEN_KEY = 'rjb_admin_token'

function getToken(): string | null {
  if (typeof window === 'undefined') return null
  return sessionStorage.getItem(TOKEN_KEY)
}

function setToken(t: string) {
  sessionStorage.setItem(TOKEN_KEY, t)
}

function clearToken() {
  sessionStorage.removeItem(TOKEN_KEY)
}

// ─── status helpers ───────────────────────────────────────────────────────────

const STATUS_LABELS: Record<RoomStatus, string> = {
  available: 'Disponível',
  occupied: 'Alugado',
  reserved: 'Reservado',
}

const STATUS_COLORS: Record<RoomStatus, string> = {
  available: 'bg-green-100 text-green-700',
  occupied: 'bg-red-100 text-red-700',
  reserved: 'bg-yellow-100 text-yellow-700',
}

const STATUS_CYCLE: Record<RoomStatus, RoomStatus> = {
  available: 'occupied',
  occupied: 'reserved',
  reserved: 'available',
}

// ─── Room Modal ───────────────────────────────────────────────────────────────

interface RoomModalProps {
  room: Partial<Room>
  onSave: (r: Room) => void
  onClose: () => void
}

function RoomModal({ room, onSave, onClose }: RoomModalProps) {
  const [form, setForm] = useState<Partial<Room>>({
    name: '',
    price: 1100,
    priceGroup: '1100',
    status: 'available',
    driveId: '',
    driveUrl: '',
    whatsappMsg: '',
    description: '',
    videoUrl: '',
    highlight: '',
    ...room,
  })

  function update<K extends keyof Room>(key: K, value: Room[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleSave() {
    if (!form.name) return
    const r: Room = {
      id: form.id ?? '',
      name: form.name ?? '',
      price: form.price ?? 0,
      priceGroup: String(form.price ?? 0),
      status: form.status ?? 'available',
      driveId: form.driveId ?? '',
      driveUrl: form.driveUrl ?? '',
      whatsappMsg:
        form.whatsappMsg ||
        `Olá! Tenho interesse no ${form.name} (R$${form.price}/mês). Poderia me dar mais informações?`,
      description: form.description ?? '',
      videoUrl: form.videoUrl ?? '',
      highlight: (form.highlight ?? '') as 'novo' | 'reformado' | '',
    }
    onSave(r)
  }

  const previewUrl = form.driveUrl ? getDriveThumbnailUrl(form.driveUrl, 400) : null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-bold text-gray-900 text-lg">
            {form.id ? 'Editar Quarto' : 'Novo Quarto'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Nome</label>
            <input
              value={form.name ?? ''}
              onChange={(e) => update('name', e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Ex: Quarto 101"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Preço (R$)</label>
              <input
                type="number"
                value={form.price ?? ''}
                onChange={(e) => update('price', Number(e.target.value))}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Status</label>
              <select
                value={form.status}
                onChange={(e) => update('status', e.target.value as RoomStatus)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="available">Disponível</option>
                <option value="occupied">Alugado</option>
                <option value="reserved">Reservado</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Destaque</label>
              <select
                value={form.highlight ?? ''}
                onChange={(e) => update('highlight', e.target.value as 'novo' | 'reformado' | '')}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="">Nenhum</option>
                <option value="novo">Novo</option>
                <option value="reformado">Reformado</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Descrição</label>
            <textarea
              value={form.description ?? ''}
              onChange={(e) => update('description', e.target.value)}
              rows={2}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              placeholder="Descrição curta do quarto..."
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Link do Vídeo (YouTube / Drive)</label>
            <input
              value={form.videoUrl ?? ''}
              onChange={(e) => update('videoUrl', e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="https://www.youtube.com/watch?v=..."
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
              Link Google Drive (foto)
            </label>
            <input
              value={form.driveUrl ?? ''}
              onChange={(e) => update('driveUrl', e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="https://drive.google.com/file/d/..."
            />
          </div>

          {previewUrl && (
            <div className="rounded-lg overflow-hidden border border-gray-100 h-40">
              <img src={previewUrl} alt="preview" className="w-full h-full object-cover" />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
              Mensagem WhatsApp customizada
            </label>
            <textarea
              value={form.whatsappMsg ?? ''}
              onChange={(e) => update('whatsappMsg', e.target.value)}
              rows={2}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              placeholder="Deixe em branco para usar a mensagem padrão..."
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 p-6 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-lg text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Tab: QUARTOS ─────────────────────────────────────────────────────────────

function QuartosTab({ token }: { token: string }) {
  const [rooms, setRooms] = useState<Room[]>([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState<Partial<Room> | null>(null)
  const [deleting, setDeleting] = useState<string | null>(null)

  async function load() {
    setLoading(true)
    const res = await fetch('/api/rooms')
    const data = await res.json()
    const all: Room[] = (data.priceGroups ?? []).flatMap((g: { rooms: Room[] }) => g.rooms)
    setRooms(all)
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function handleSave(room: Room) {
    const isNew = !room.id
    const method = isNew ? 'POST' : 'PUT'
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const body = isNew ? (({ id: _id, ...rest }: Room) => rest)(room) : room
    await fetch('/api/rooms', {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(body),
    })
    setModal(null)
    load()
  }

  async function handleSetStatus(room: Room, status: RoomStatus) {
    if (room.status === status) return
    const updated: Room = { ...room, status }
    await fetch('/api/rooms', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(updated),
    })
    load()
  }

  async function handleDelete(id: string) {
    if (!confirm('Excluir este quarto?')) return
    setDeleting(id)
    await fetch(`/api/rooms?id=${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    })
    setDeleting(null)
    load()
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setModal({})}
          className="flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          + Novo Quarto
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-7 h-7 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Foto</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Nome</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Preço</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {rooms.map((room) => (
                <tr key={room.id} className="bg-white hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      {room.driveUrl ? (
                        <img
                          src={getDriveThumbnailUrl(room.driveUrl, 120)}
                          alt={room.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">{room.name}</td>
                  <td className="px-4 py-3 text-gray-600">
                    R$ {room.price.toLocaleString('pt-BR')}/mês
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${STATUS_COLORS[room.status]}`}>
                      {STATUS_LABELS[room.status]}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col gap-1.5">
                      {/* Quick status toggle — only Disponível / Alugado */}
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleSetStatus(room, 'available')}
                          disabled={room.status === 'available'}
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full border transition-all ${
                            room.status === 'available'
                              ? 'bg-green-500 text-white border-green-500 cursor-default'
                              : 'text-green-600 border-green-400 hover:bg-green-50'
                          }`}
                        >
                          ✓ Disponível
                        </button>
                        <button
                          onClick={() => handleSetStatus(room, 'occupied')}
                          disabled={room.status === 'occupied'}
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full border transition-all ${
                            room.status === 'occupied'
                              ? 'bg-red-500 text-white border-red-500 cursor-default'
                              : 'text-red-500 border-red-400 hover:bg-red-50'
                          }`}
                        >
                          Alugado
                        </button>
                      </div>
                      {/* Row actions */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setModal(room)}
                          className="text-xs text-gray-500 hover:text-gray-800 hover:underline transition-colors"
                        >
                          Editar
                        </button>
                        <span className="text-gray-200">|</span>
                        <button
                          onClick={() => handleDelete(room.id)}
                          disabled={deleting === room.id}
                          className="text-xs text-red-400 hover:text-red-600 hover:underline disabled:opacity-50 transition-colors"
                        >
                          {deleting === room.id ? '...' : 'Excluir'}
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
              {rooms.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center text-gray-400 text-sm">
                    Nenhum quarto cadastrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {modal !== null && (
        <RoomModal
          room={modal}
          onSave={handleSave}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  )
}

// ─── Tab: ESTRUTURA ───────────────────────────────────────────────────────────

function EstruturaTab({ token }: { token: string }) {
  const [facilities, setFacilities] = useState<Facility[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/config')
      .then((r) => r.json())
      .then((d) => {
        setFacilities(d.facilities ?? [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  function updateField(id: string, key: keyof Facility, value: string) {
    setFacilities((prev) =>
      prev.map((f) => (f.id === id ? { ...f, [key]: value } : f))
    )
  }

  async function handleSave(id: string) {
    setSaving(id)
    await fetch('/api/admin/config', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ facilities }),
    })
    setSaving(null)
  }

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-7 h-7 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {facilities.map((f) => {
        const previewUrl = f.driveUrl ? getDriveThumbnailUrl(f.driveUrl, 400) : null
        return (
          <div key={f.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-3">
            <div className="h-32 rounded-xl overflow-hidden bg-gray-100">
              {previewUrl ? (
                <img src={previewUrl} alt={f.label} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">
                  Sem imagem
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Label</label>
              <input
                value={f.label}
                onChange={(e) => updateField(f.id, 'label', e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Subtítulo</label>
              <input
                value={f.subtitle}
                onChange={(e) => updateField(f.id, 'subtitle', e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                Drive Link (foto)
              </label>
              <input
                value={f.driveUrl}
                onChange={(e) => updateField(f.id, 'driveUrl', e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="https://drive.google.com/file/d/..."
              />
            </div>

            <button
              onClick={() => handleSave(f.id)}
              disabled={saving === f.id}
              className="w-full py-2 rounded-lg text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              {saving === f.id ? 'Salvando...' : 'Salvar'}
            </button>
          </div>
        )
      })}
    </div>
  )
}

// ─── Tab: GERAL ───────────────────────────────────────────────────────────────

function GeralTab({ token }: { token: string }) {
  const [logoUrl, setLogoUrl] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [loading, setLoading] = useState(true)
  const [savingLogo, setSavingLogo] = useState(false)
  const [savingPass, setSavingPass] = useState(false)
  const [msgLogo, setMsgLogo] = useState('')
  const [msgPass, setMsgPass] = useState('')

  useEffect(() => {
    fetch('/api/config')
      .then((r) => r.json())
      .then((d) => {
        setLogoUrl(d.logo?.driveUrl ?? '')
        setWhatsapp(d.whatsappDefault ?? '')
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  async function handleSaveLogo() {
    setSavingLogo(true)
    setMsgLogo('')
    await fetch('/api/admin/config', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        logo: { driveId: logoUrl, driveUrl: logoUrl },
        whatsappDefault: whatsapp,
      }),
    })
    setSavingLogo(false)
    setMsgLogo('Salvo!')
    setTimeout(() => setMsgLogo(''), 2000)
  }

  async function handleChangePassword() {
    if (!newPassword) return
    setSavingPass(true)
    setMsgPass('')
    const hash = await sha256(newPassword)
    await fetch('/api/admin/password', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ newPasswordHash: hash }),
    })
    setSavingPass(false)
    setNewPassword('')
    setMsgPass('Senha alterada!')
    setTimeout(() => setMsgPass(''), 3000)
  }

  const logoPreview = logoUrl ? getDriveThumbnailUrl(logoUrl, 400) : null

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-7 h-7 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-8 max-w-xl">
      {/* Logo + WhatsApp */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="font-semibold text-gray-900">Logo e WhatsApp</h3>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
            Logo (Drive Link)
          </label>
          <input
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="https://drive.google.com/file/d/..."
          />
        </div>

        {logoPreview && (
          <div className="h-24 rounded-xl overflow-hidden bg-gray-100">
            <img src={logoPreview} alt="Logo preview" className="w-full h-full object-contain" />
          </div>
        )}

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
            WhatsApp padrão
          </label>
          <input
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="5541999999999"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSaveLogo}
            disabled={savingLogo}
            className="px-6 py-2 rounded-lg text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {savingLogo ? 'Salvando...' : 'Salvar'}
          </button>
          {msgLogo && <span className="text-sm text-green-600">{msgLogo}</span>}
        </div>
      </div>

      {/* Alterar senha */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="font-semibold text-gray-900">Alterar Senha</h3>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
            Nova senha
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleChangePassword}
            disabled={savingPass || !newPassword}
            className="px-6 py-2 rounded-lg text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {savingPass ? 'Salvando...' : 'Alterar Senha'}
          </button>
          {msgPass && <span className="text-sm text-green-600">{msgPass}</span>}
        </div>
      </div>
    </div>
  )
}

// ─── Login Form ───────────────────────────────────────────────────────────────

function LoginForm({ onLogin }: { onLogin: (token: string) => void }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    setLoading(false)
    if (!res.ok) {
      setError('Senha incorreta.')
      return
    }
    const { token } = await res.json()
    setToken(token)
    onLogin(token)
  }

  return (
    <div className="min-h-screen bg-[#0a2617] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8">
        <div className="flex justify-center mb-6">
          <img 
            src="/logo.png" 
            alt="Recanto Jardim Botânico" 
            className="w-14 h-14 rounded-full object-cover border border-gray-200 shadow-sm"
          />
        </div>
        <h1 className="text-center font-bold text-gray-900 text-xl mb-2">Painel Admin</h1>
        <p className="text-center text-gray-500 text-sm mb-6">
          Recanto Jardim Botânico
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="••••••••"
              autoFocus
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}

// ─── Admin Panel ──────────────────────────────────────────────────────────────

type Tab = 'quartos' | 'estrutura' | 'geral'

function AdminPanel({ token, onLogout }: { token: string; onLogout: () => void }) {
  const [tab, setTab] = useState<Tab>('quartos')

  const tabs: { key: Tab; label: string }[] = [
    { key: 'quartos', label: 'Quartos' },
    { key: 'estrutura', label: 'Estrutura' },
    { key: 'geral', label: 'Geral' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-primary text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Recanto Jardim Botânico" 
                className="w-8 h-8 rounded-full object-cover border border-white/20 flex-shrink-0"
              />
              <span className="font-semibold text-sm">Admin</span>
            </div>
            <button
              onClick={onLogout}
              className="text-xs text-white/70 hover:text-white transition-colors"
            >
              Sair
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 pb-0">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-5 py-3 text-sm font-semibold transition-colors border-b-2 ${
                  tab === t.key
                    ? 'border-gold text-white'
                    : 'border-transparent text-white/60 hover:text-white'
                }`}
              >
                {t.label.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {tab === 'quartos' && <QuartosTab token={token} />}
        {tab === 'estrutura' && <EstruturaTab token={token} />}
        {tab === 'geral' && <GeralTab token={token} />}
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const [token, setTokenState] = useState<string | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setTokenState(getToken())
    setReady(true)
  }, [])

  function handleLogin(t: string) {
    setTokenState(t)
  }

  function handleLogout() {
    clearToken()
    setTokenState(null)
  }

  if (!ready) return null

  if (!token) {
    return <LoginForm onLogin={handleLogin} />
  }

  return <AdminPanel token={token} onLogout={handleLogout} />
}
