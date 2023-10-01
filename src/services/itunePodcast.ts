import ItunesPodcast from 'types/api/ItunesPodcast'
import ItunesPodcasts from 'types/api/ItunesPodcasts'
import Podcast from 'types/model/Podcast'
import PodcastEpisode from 'types/model/PodcastEpisode'
import { getProtectedUrl } from 'utils/cors'

const fetchPodcasts = async (limit: number = 100): Promise<Podcast[]> => {
  let parsed: ItunesPodcasts

  try {
    const response = await fetch(`https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1310/json`)
    parsed = await response.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.log(e, e?.stack)
    return []
  }

  const podcasts: Podcast[] = parsed?.feed?.entry.map(podcast => {
    return {
      id: podcast.id.attributes['im:id'],
      artist: podcast['im:artist'].label,
      images: podcast['im:image'].map(images => images.label),
      name: podcast['im:name'].label,
      summary: podcast.summary.label,
    }
  })

  return podcasts
}

const fetchPodcastWithEpisodes = async (id: string): Promise<Podcast | null> => {
  let parsed: ItunesPodcast

  try {
    const response = await fetch(
      getProtectedUrl(`https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode&limit=200`)
    )
    parsed = await response.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.log(e, e?.stack)
    return null
  }

  const podcastResult = parsed.results.find(result => result.kind === 'podcast')
  if (!podcastResult) return null

  const podcastEpisodesResult = parsed.results.filter(result => result.kind === 'podcast-episode')
  const podcastEpisodes: PodcastEpisode[] = podcastEpisodesResult.map(podcastEpisodeResult => {
    return {
      description: podcastEpisodeResult.description || '',
      duration: podcastEpisodeResult.trackTimeMillis || 0,
      id: `${podcastEpisodeResult.trackId}`,
      name: podcastEpisodeResult.trackName,
      releaseDate: podcastEpisodeResult.releaseDate,
      url: podcastEpisodeResult.episodeUrl || '',
    }
  })

  const podcast: Podcast = {
    id: `${podcastResult.trackId}`,
    artist: podcastResult.artistName,
    episodes: podcastEpisodes,
    images: [podcastResult.artworkUrl100],
    name: podcastResult.trackName,
    summary: podcastResult.description || '',
  }

  return podcast
}

export { fetchPodcasts, fetchPodcastWithEpisodes }
