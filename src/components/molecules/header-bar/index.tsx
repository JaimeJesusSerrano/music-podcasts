import React from 'react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import routes from 'config/routes'

const HeaderBar = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div>
      <Link to={routes.home.path}>{t('component.header.title')}</Link>
    </div>
  )
}

export default HeaderBar
