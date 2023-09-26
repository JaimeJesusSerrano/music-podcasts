import React, { ReactNode } from 'react'

type ParamTypes = {
  children: ReactNode
}

const TitleH2 = ({ children }: ParamTypes): JSX.Element => {
  return <h2>{children}</h2>
}

export default TitleH2
