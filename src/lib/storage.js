export const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch (e) {
    return fallback
  }
}
export const save = (key, val) => {
  try { localStorage.setItem(key, JSON.stringify(val)) } catch(e){}
}
