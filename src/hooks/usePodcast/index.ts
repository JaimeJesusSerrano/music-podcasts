import { useQuery } from '@tanstack/react-query'

import { fetchPodcastWithEpisodes } from 'services/itunePodcast'

const usePodcast = (id: string) =>
  useQuery({
    queryKey: ['podcast', id],
    queryFn: () => fetchPodcastWithEpisodes(id),
    cacheTime: 86400, // 1 day
    staleTime: 86400, // 1 day
  })

export default usePodcast
