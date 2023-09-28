import React from 'react'

import PodcastEpisode from 'types/model/PodcastEpisode'

interface Props {
  podcastEpisodes: PodcastEpisode[]
}

const PodcastEpisodes = ({ podcastEpisodes }: Props): JSX.Element => {
  if (!podcastEpisodes?.length) return <></>

  return (
    <table className='w-full'>
      <thead>
        <tr>
          <th className='p-4 border border-gray-200 text-left'>Title</th>
          <th className='p-4 border border-gray-200 text-left'>Date</th>
          <th className='p-4 border border-gray-200 text-left'>Duration</th>
        </tr>
      </thead>
      <tbody>
        {podcastEpisodes.map(episode => {
          return (
            <tr className='even:bg-gray-200' key={episode.id}>
              <td className='p-4 border border-gray-200 text-left'>{episode.name}</td>
              <td className='p-4 border border-gray-200 text-left'>{episode.releaseDate?.toString() || ''}</td>
              <td className='p-4 border border-gray-200 text-left'>{episode.duration}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default PodcastEpisodes
