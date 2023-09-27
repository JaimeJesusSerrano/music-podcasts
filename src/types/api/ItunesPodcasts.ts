/* eslint-disable @typescript-eslint/no-explicit-any */

interface PodcastImages {
  attributes: {
    height: string
  }
  label: string
}

interface Podcast {
  id: {
    attributes: {
      'im:id': string
    }
    label: string
  }
  'im:artist': {
    label: string
  }
  'im:image': PodcastImages[]
  'im:name': {
    label: string
  }
  summary: {
    label: string
  }
  title: {
    label: string
  }
}

interface ItunesPodcastsData {
  author: any
  entry: Podcast[]
  icon: any
  id: any
  link: any
  rights: any
  title: any
  updated: any
}

interface ItunesPodcasts {
  feed: ItunesPodcastsData
}

export default ItunesPodcasts
