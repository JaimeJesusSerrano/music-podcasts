import React from 'react'

interface Props {
  placeholder?: string
  setValue: (newValue: string) => void
  value: string
}

const SearchBox = ({ placeholder, setValue, value }: Props): JSX.Element => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <input
      className='h-8 w-52 pl-2 border-2 border-gray-400'
      onChange={onChange}
      placeholder={placeholder || ''}
      value={value}
    />
  )
}

export default SearchBox
