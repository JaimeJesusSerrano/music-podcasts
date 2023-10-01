const getProtectedUrl = (url: string) => {
  return `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`
}

export { getProtectedUrl }
