import React from 'react'

import { useParams } from 'react-router-dom'

import LoadingSpinner from 'components/atoms/loading-spinner'
import PodcastCard from 'components/molecules/podcast-card'
import MainTemplate from 'components/templates/main'
import usePodcast from 'hooks/usePodcast'

import PodcastEpisodes from './components/podcast-episodes-list'

const Podcast = (): JSX.Element => {
  const { podcastId } = useParams()
  const { isLoading, error, data: podcast } = usePodcast(podcastId as string)

  if (!podcastId) return <MainTemplate>Wrong podcast id</MainTemplate>
  if (isLoading)
    return (
      <MainTemplate>
        <div className='mt-12 flex justify-center'>
          <LoadingSpinner className='h-12 w-12' />
        </div>
      </MainTemplate>
    )
  if (error || !podcast) return <MainTemplate>Error</MainTemplate>

  return (
    <MainTemplate>
      <div className='mt-8 mx-4 gap-x-20 flex flex-col md:flex-row justify-between items-center md:items-start'>
        <PodcastCard podcast={podcast} />

        <div className='mt-4 md:mt-0 flex flex-col flex-1'>
          <div className='h-auto flex items-center border border-gray-200 shadow-md'>
            <span className='p-2 text-xl font-medium'>Episodes: {podcast.episodes?.length || 0}</span>
          </div>

          {podcast.episodes?.length ? (
            <div className='my-6 border border-gray-200 shadow-md'>
              <PodcastEpisodes podcastEpisodes={podcast.episodes} podcastId={podcastId} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </MainTemplate>
  )
}

export default Podcast
