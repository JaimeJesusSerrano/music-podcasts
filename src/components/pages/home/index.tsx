import React, { useMemo, useState } from 'react'

import MainTemplate from 'components/templates/main'
import usePodcasts from 'hooks/usePodcasts'

import FilterBar from './components/filter-bar'
import PodcastList from './components/podcast-list'

const Home = (): JSX.Element => {
  const { isLoading, error, data: podcasts } = usePodcasts()
  const [termToSearch, setTermToSearch] = useState('')

  const podcastsFiltered = useMemo(() => {
    if (!podcasts) return []
    if (!termToSearch) return podcasts
    return podcasts.filter(podcast => {
      return (
        podcast.name.toLowerCase().indexOf(termToSearch.toLowerCase()) !== -1 ||
        podcast.artist.toLowerCase().indexOf(termToSearch.toLowerCase()) !== -1
      )
    })
  }, [podcasts, termToSearch])

  return (
    <MainTemplate>
      <div className='mt-4 mr-4 flex justify-end'>
        <FilterBar
          itemsToShow={podcastsFiltered.length}
          setTermToSearch={setTermToSearch}
          termToSearch={termToSearch}
        />
      </div>

      {isLoading ? <div>Loading</div> : <></>}
      {error ? <div>There is an error</div> : <></>}
      {!isLoading && !error ? (
        <div className='my-12 px-4'>
          <PodcastList podcasts={podcastsFiltered} />
        </div>
      ) : (
        <></>
      )}
    </MainTemplate>
  )
}

export default Home
