import React, { ReactNode } from 'react'

type ParamTypes = {
  children: ReactNode
}

const TitleH1 = ({ children }: ParamTypes): JSX.Element => {
  return <h1>{children}</h1>
}

export default TitleH1
