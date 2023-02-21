const getStorage = (key: string) => {
  // Check if window is available (SSR)
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }
}
const setStorage = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    localStorage.setItem(key, JSON.stringify(value))
  }
}
export const storage = {
  getStorage,
  setStorage,
}
