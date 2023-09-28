import PodcastEpisode from './PodcastEpisode'

interface Podcast {
  id: string
  artist: string
  episodes?: PodcastEpisode[]
  images: string[]
  name: string
  summary: string
}

export default Podcast
