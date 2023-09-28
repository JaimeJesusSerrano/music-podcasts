import { useQuery } from '@tanstack/react-query'

import { fetchPodcasts } from 'services/itunePodcast'

const usePodcasts = (limit: number = 100) =>
  useQuery({
    queryKey: ['podcasts', limit],
    queryFn: () => fetchPodcasts(limit),
    cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })

export default usePodcasts
