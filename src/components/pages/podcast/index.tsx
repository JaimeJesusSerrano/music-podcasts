import React from 'react'

import { useParams } from 'react-router-dom'

import MainTemplate from 'components/templates/main'
import usePodcast from 'hooks/usePodcast'

const Podcast = (): JSX.Element => {
  const { podcastId } = useParams()
  const { isLoading, error, data: podcast } = usePodcast(podcastId as string)

  if (isLoading) return <MainTemplate>Loading</MainTemplate>
  if (error || !podcast) return <MainTemplate>Error</MainTemplate>

  return (
    <MainTemplate>
      <div className='mt-8 flex justify-between mx-4 gap-x-20'>
        <div className='w-52 p-4 border border-gray-200 shadow-md'>
          <div className='flex justify-center'>
            <img alt={podcast.name} className='w-32' src={podcast.images[0]} loading='lazy' />
          </div>
          <div className='mt-4 border-t font-medium'>{podcast.name}</div>
          <div className='text-sm text-gray-500'>by {podcast.artist}</div>
          <div className='mt-4 border-t'>{podcast.summary}</div>
        </div>
        <div className='w-full'>List</div>
      </div>
    </MainTemplate>
  )
}

export default Podcast
