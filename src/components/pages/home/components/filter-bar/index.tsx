import React from 'react'

import SearchBox from 'components/atoms/search-box'
import Tag from 'components/atoms/tag'

const FilterBar = (): JSX.Element => {
  return (
    <div className='flex items-center'>
      <div className='mr-2'>
        <Tag value={100} />
      </div>
      <div>
        <SearchBox placeholder='Filter podcasts...' />
      </div>
    </div>
  )
}

export default FilterBar
