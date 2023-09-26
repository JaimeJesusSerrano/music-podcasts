import React, { ReactNode } from 'react'

import * as S from './styled'

type ParamTypes = {
  children: ReactNode
}

const TitleH2 = ({ children }: ParamTypes): JSX.Element => {
  return <S.H2>{children}</S.H2>
}

export default TitleH2
