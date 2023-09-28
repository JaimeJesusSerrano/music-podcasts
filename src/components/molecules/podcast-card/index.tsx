import React from 'react'

import Podcast from 'types/model/Podcast'

interface Props {
  podcast: Podcast
}

const PodcastCard = ({ podcast }: Props): JSX.Element => {
  return (
    <div className='w-56 h-max p-4 border border-gray-200 shadow-md'>
      <div className='flex justify-center'>
        <img alt={podcast.name} className='w-48' src={podcast.images[0]} loading='lazy' />
      </div>
      <div className='mt-4 pt-2 border-t font-medium'>{podcast.name}</div>
      <div className='text-sm text-gray-500'>by {podcast.artist}</div>
      <div className='mt-4 border-t'>{podcast.summary}</div>
    </div>
  )
}

export default PodcastCard
