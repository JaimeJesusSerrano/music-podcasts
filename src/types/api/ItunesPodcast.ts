interface ItunesPodcastData {
  artistName: string
  artworkUrl100: string
  description?: string
  episodeUrl?: string
  kind: 'podcast-episode' | 'podcast'
  releaseDate?: Date
  trackId: number
  trackName: string
  trackTimeMillis?: number
}

interface ItunesPodcast {
  resultCount: number
  results: ItunesPodcastData[]
}

export default ItunesPodcast
