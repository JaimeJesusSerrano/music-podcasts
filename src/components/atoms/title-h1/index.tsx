import React, { ReactNode } from 'react'

import * as S from './styled'

type ParamTypes = {
  children: ReactNode
}

const TitleH1 = ({ children }: ParamTypes): JSX.Element => {
  return <S.H1>{children}</S.H1>
}

export default TitleH1
