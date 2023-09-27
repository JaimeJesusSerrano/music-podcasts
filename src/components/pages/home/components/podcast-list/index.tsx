import React from 'react'

import usePodcasts from 'hooks/usePodcasts'
import PodcastListItem from '../podcast-list-item'

const PodcastList = (): JSX.Element => {
  const { isLoading, error, data: podcasts } = usePodcasts()

  if (isLoading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>There is an error</div>
  }

  console.log(podcasts)

  return (
    <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-y-24 items-start'>
      {podcasts?.map(podcast => (
        <React.Fragment key={podcast.id}>
          <PodcastListItem podcast={podcast} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default PodcastList
