import React from 'react'

import { useTranslation } from 'react-i18next'

import MainTemplate from 'components/templates/main'
import * as S from './styled'

const PageNotFound = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <MainTemplate>
      <S.Wrapper>{t('page.pageNotFound.title')}</S.Wrapper>
    </MainTemplate>
  )
}

export default PageNotFound
