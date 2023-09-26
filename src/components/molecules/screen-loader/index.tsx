import React from 'react'

import LoaderAnimation from 'components/atoms/loader-animation'

import * as S from './styled'

const ScreenLoader = (): JSX.Element => {
  return (
    <S.Body>
      <LoaderAnimation />
    </S.Body>
  )
}

export default ScreenLoader
