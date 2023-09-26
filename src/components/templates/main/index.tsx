import React from 'react'

import HeaderBar from 'components/molecules/header-bar'

interface MainProps {
  children: React.ReactNode
}

const Main = ({ children }: MainProps): JSX.Element => {
  return (
    <div>
      <HeaderBar />
      <div>{children}</div>
    </div>
  )
}

export default Main
