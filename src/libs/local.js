export const localSave = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const localRead = (key) => {
  return JSON.parse(localStorage.getItem(key)) || ''
}

export const localRemove = (key) => {
  localStorage.removeItem(key)
}
