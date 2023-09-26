import React from 'react'

import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import MainTemplate from 'components/templates/main'
import * as S from './styled'
import routes from 'config/routes'

const Home = (): JSX.Element => {
  const navigate = useNavigate()
  const handleClick = () => navigate(routes.exercisesList.path)
  const { t } = useTranslation()

  return (
    <MainTemplate>
      <S.Wrapper>
        <S.Button type='button' onClick={handleClick}>
          Hello world!
        </S.Button>
      </S.Wrapper>
    </MainTemplate>
  )
}

export default Home
