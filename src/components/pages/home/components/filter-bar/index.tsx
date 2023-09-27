import React from 'react'

import SearchBox from 'components/atoms/search-box'
import Tag from 'components/atoms/tag'

interface Props {
  itemsToShow: number
  setTermToSearch: (newValue: string) => void
  termToSearch: string
}

const FilterBar = ({ itemsToShow, setTermToSearch, termToSearch }: Props): JSX.Element => {
  return (
    <div className='flex items-center'>
      <div className='mr-2'>
        <Tag value={itemsToShow} />
      </div>
      <div>
        <SearchBox placeholder='Filter podcasts...' setValue={setTermToSearch} value={termToSearch} />
      </div>
    </div>
  )
}

export default FilterBar
