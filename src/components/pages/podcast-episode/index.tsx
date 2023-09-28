import React from 'react'

import { useParams } from 'react-router-dom'

import PodcastCard from 'components/molecules/podcast-card'
import MainTemplate from 'components/templates/main'
import usePodcast from 'hooks/usePodcast'

const PodcastEpisode = (): JSX.Element => {
  const { episodeId, podcastId } = useParams()
  const { isLoading, error, data: podcast } = usePodcast(podcastId as string)
  const podcastEpisode = podcast?.episodes?.find(episode => episode.id === episodeId)

  if (!episodeId) return <MainTemplate>Wrong episode id</MainTemplate>
  if (!podcastId) return <MainTemplate>Wrong podcast id</MainTemplate>
  if (isLoading) return <MainTemplate>Loading</MainTemplate>
  if (error || !podcast || !podcastEpisode) return <MainTemplate>Error</MainTemplate>

  return (
    <MainTemplate>
      <div className='mt-8 mx-4 gap-x-20 flex flex-col md:flex-row justify-between items-center md:items-start'>
        <PodcastCard podcast={podcast} />

        <div className='mt-4 md:mt-0 flex flex-col flex-1'>
          <div className='p-4 h-auto flex flex-col border border-gray-200 shadow-md'>
            <div>
              <span className='text-xl font-medium'>{podcastEpisode.name}</span>
            </div>
            <div className='mt-2'>
              <pre className='whitespace-pre-wrap'>{podcastEpisode.description}</pre>
            </div>
            <div className='my-4 pt-4 border-t'>{podcastEpisode.url}</div>
          </div>
        </div>
      </div>
    </MainTemplate>
  )
}

export default PodcastEpisode
