import { useQuery } from '@tanstack/react-query'
import ItunesPodcast from 'types/api/ItunesPodcast'

import Podcast from 'types/model/Podcast'

const fetchPodcast = async (id: string): Promise<Podcast | null> => {
  const parsed: ItunesPodcast = await fetch(
    `https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode&limit=200`
  ).then(res => res.json())

  const podcastResult = parsed.results.find(result => result.kind === 'podcast')
  if (!podcastResult) return null

  const podcast: Podcast = {
    id: podcastResult.trackId,
    artist: podcastResult.artistName,
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
