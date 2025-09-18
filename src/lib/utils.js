export const uid = () => Date.now() + Math.floor(Math.random()*999)
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
