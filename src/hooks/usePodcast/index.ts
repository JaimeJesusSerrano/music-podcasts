import { useQuery } from '@tanstack/react-query'

import { fetchPodcastWithEpisodes } from 'services/itunePodcast'

const usePodcast = (id: string) =>
  useQuery({
    queryKey: ['podcast', id],
    queryFn: () => fetchPodcastWithEpisodes(id),
    cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })

export default usePodcast
