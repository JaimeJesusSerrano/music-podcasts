import React from 'react'

import FilterBar from './components/filter-bar'
import MainTemplate from 'components/templates/main'

const Home = (): JSX.Element => {
  return (
    <MainTemplate>
      <div className='mt-4 mr-4 flex justify-end'>
        <FilterBar />
      </div>
      <div>Podcasts</div>
    </MainTemplate>
  )
}

export default Home
