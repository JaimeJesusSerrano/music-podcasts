import React from 'react'

import { useTranslation } from 'react-i18next'

import MainTemplate from 'components/templates/main'
const PageNotFound = (): JSX.Element => {
  const { t } = useTranslation()

  // align-items: center;
  // display: flex;
  // justify-content: center;
  // font-size: 30px;
  // height: calc(100% - 56px);

  return (
    <MainTemplate>
      <div>{t('page.pageNotFound.title')}</div>
    </MainTemplate>
  )
}

export default PageNotFound
