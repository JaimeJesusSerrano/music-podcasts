interface PodcastImages {
  attributes: {
    height: string
  }
  label: string
}

interface Podcast {
  id: string
  artist: string
  images: PodcastImages[]
  name: string
  summary: string
}

export default Podcast
