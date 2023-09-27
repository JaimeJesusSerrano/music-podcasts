import React from 'react'

import MainTemplate from 'components/templates/main'
import FilterBar from './components/filter-bar'
import PodcastList from './components/podcast-list'

const Home = (): JSX.Element => {
  return (
    <MainTemplate>
      <div className='mt-4 mr-4 flex justify-end'>
        <FilterBar />
      </div>
      <div className='my-12 px-4'>
        <PodcastList />
      </div>
    </MainTemplate>
  )
}

export default Home
