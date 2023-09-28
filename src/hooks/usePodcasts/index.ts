import { useQuery } from '@tanstack/react-query'

import { fetchPodcasts } from 'services/itunePodcast'

const usePodcasts = (limit: number = 100) =>
  useQuery({
    queryKey: ['podcasts', limit],
    queryFn: () => fetchPodcasts(limit),
    cacheTime: 86400, // 1 day
    staleTime: 86400, // 1 day
  })

export default usePodcasts
