interface ItunesPodcastData {
  artistName: string
  artworkUrl100: string
  description?: string
  kind: 'podcast-episode' | 'podcast'
  trackId: string
  trackName: string
}

interface ItunesPodcast {
  resultCount: number
  results: ItunesPodcastData[]
}

export default ItunesPodcast
