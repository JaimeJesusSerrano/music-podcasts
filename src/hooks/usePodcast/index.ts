import { useQuery } from '@tanstack/react-query'
import ItunesPodcast from 'types/api/ItunesPodcast'

import Podcast from 'types/model/Podcast'
import PodcastEpisode from 'types/model/PodcastEpisode'

const fetchPodcast = async (id: string): Promise<Podcast | null> => {
  const parsed: ItunesPodcast = await fetch(
    `https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode&limit=200`
  ).then(res => res.json())

  const podcastResult = parsed.results.find(result => result.kind === 'podcast')
  if (!podcastResult) return null

  const podcastEpisodesResult = parsed.results.filter(result => result.kind === 'podcast-episode')
  const podcastEpisodes: PodcastEpisode[] = podcastEpisodesResult.map(podcastEpisodeResult => {
    return {
      description: podcastEpisodeResult.description || '',
      duration: podcastEpisodeResult.trackTimeMillis || 0,
      id: podcastEpisodeResult.trackId,
      name: podcastEpisodeResult.trackName,
      releaseDate: podcastEpisodeResult.releaseDate,
      url: podcastEpisodeResult.episodeUrl || '',
    }
  })

  const podcast: Podcast = {
    id: podcastResult.trackId,
    artist: podcastResult.artistName,
    episodes: podcastEpisodes,
    images: [podcastResult.artworkUrl100],
    name: podcastResult.trackName,
    summary: podcastResult.description || '',
  }

  return podcast
}

const usePodcast = (id: string) =>
  useQuery({
    queryKey: ['podcast', id],
    queryFn: () => fetchPodcast(id),
    cacheTime: 86400, // 1 day
    staleTime: 86400, // 1 day
  })

export default usePodcast
