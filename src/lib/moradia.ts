export const OPEN_MORADIA_EVENT = 'recanto:open-moradia'

export function openMoradiaCompartilhada() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(OPEN_MORADIA_EVENT))
}
