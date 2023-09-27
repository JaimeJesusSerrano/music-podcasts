import React from 'react'

interface Props {
  placeholder?: string
}

const SearchBox = ({ placeholder }: Props): JSX.Element => {
  return <input className='h-8 w-52 pl-2 border-2 border-gray-400' placeholder={placeholder || ''} />
}

export default SearchBox
