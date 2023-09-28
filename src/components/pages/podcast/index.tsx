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
        <div className='w-56 h-max p-4 border border-gray-200 shadow-md'>
          <div className='flex justify-center'>
            <img alt={podcast.name} className='w-48' src={podcast.images[0]} loading='lazy' />
          </div>
          <div className='mt-4 pt-2 border-t font-medium'>{podcast.name}</div>
          <div className='text-sm text-gray-500'>by {podcast.artist}</div>
          <div className='mt-4 border-t'>{podcast.summary}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='h-auto flex items-center border border-gray-200 shadow-md'>
            <span className='p-2 text-xl font-medium'>Episodes: {podcast.episodes?.length || 0}</span>
          </div>

          {podcast.episodes?.length ? (
            <div className='my-6 border border-gray-200 shadow-md'>
              <table className='w-full'>
                <thead>
                  <tr>
                    <th className='p-4 border border-gray-200 text-left'>Title</th>
                    <th className='p-4 border border-gray-200 text-left'>Date</th>
                    <th className='p-4 border border-gray-200 text-left'>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {podcast.episodes.map(episode => {
                    return (
                      <tr className='even:bg-gray-200' key={episode.id}>
                        <td className='p-4 border border-gray-200 text-left'>{episode.name}</td>
                        <td className='p-4 border border-gray-200 text-left'>
                          {episode.releaseDate?.toString() || ''}
                        </td>
                        <td className='p-4 border border-gray-200 text-left'>{episode.duration}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
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
