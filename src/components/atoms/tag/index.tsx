import React from 'react'

interface Props {
  value?: string | number
}

const Tag = ({ value }: Props): JSX.Element => {
  if (!value) return <></>

  return <div className='px-2 rounded-lg bg-cyan-500 text-white'>{value}</div>
}

export default Tag
