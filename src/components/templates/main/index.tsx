import React from 'react'

import HeaderBar from 'components/molecules/header-bar'

import * as S from './styled'

interface MainProps {
  children: React.ReactNode
}

const Main = ({ children }: MainProps): JSX.Element => {
  return (
    <S.Wrapper>
      <HeaderBar />
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.Wrapper>
  )
}

export default Main
