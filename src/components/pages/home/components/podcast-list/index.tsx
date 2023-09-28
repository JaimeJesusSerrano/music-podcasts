import React, { Fragment } from 'react'

import Podcast from 'types/model/Podcast'

import PodcastListItem from '../podcast-list-item'

interface Props {
  podcasts: Podcast[]
}

const PodcastList = ({ podcasts }: Props): JSX.Element => {
  return (
    <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-y-24 items-start'>
      {podcasts?.map(podcast => (
        <Fragment key={podcast.id}>
          <PodcastListItem podcast={podcast} />
        </Fragment>
      ))}
    </div>
  )
}

export default PodcastList
