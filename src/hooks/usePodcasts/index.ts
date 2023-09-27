import { useQuery } from '@tanstack/react-query'

import ItunesPodcasts from 'types/api/ItunesPodcasts'
import Podcast from 'types/model/Podcast'

const fetchPodcasts = async (limit: number = 100): Promise<Podcast[]> => {
  const parsed: ItunesPodcasts = await fetch(
    `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1310/json`
  ).then(res => res.json())

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

const usePodcasts = (limit: number = 100) =>
  useQuery({
    queryKey: ['podcasts', limit],
    queryFn: () => fetchPodcasts(limit),
    cacheTime: 86400, // 1 day
    staleTime: 86400, // 1 day
  })

export default usePodcasts
