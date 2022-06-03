class LocalCache {
  setCache(key: string, value: string, localType = 'local') {
    switch (localType) {
      case 'local':
        window.localStorage.setItem(key, JSON.stringify(value))
        break
      case 'session':
        break
      case 'cookie':
        break
    }
  }
  getCache(key: string) {
    // obj => string => obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
