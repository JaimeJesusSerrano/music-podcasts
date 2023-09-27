import React from 'react'
import { useNavigate } from 'react-router-dom'

import routes from 'config/routes'
import Podcast from 'types/model/Podcast'

interface Props {
  podcast: Podcast
}

const PodcastListItem = ({ podcast }: Props): JSX.Element => {
  const navigate = useNavigate()

  const onClickItem = () => {
    navigate(routes.podcast.path.replace(':podcastId', podcast.id))
  }

  if (!podcast) return <></>

  return (
    <div
      className='w-52 p-4 flex flex-col justify-self-center border border-gray-200 shadow-md cursor-pointer'
      onClick={onClickItem}
    >
      {podcast.images?.length ? (
        <div className='flex justify-center	'>
          <img
            alt={podcast.name}
            className='relative -top-12 w-24 rounded-full border border-gray-400'
            loading='lazy'
            src={podcast.images[0].label}
          />
        </div>
      ) : (
        <></>
      )}
      <span className='-mt-8 font-medium text-center leading-none'>{podcast.name}</span>
      <span className='mt-4 text-sm text-gray-500 text-center leading-none'>Author: {podcast.artist}</span>
    </div>
  )
}

export default PodcastListItem
