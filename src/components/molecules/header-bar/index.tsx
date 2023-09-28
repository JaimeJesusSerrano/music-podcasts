import React from 'react'

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import routes from 'config/routes'

const HeaderBar = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className='h-10 flex items-center pl-3 border-b-2 text-xl text-cyan-500 font-medium'>
      <Link to={routes.home.path}>{t('component.header.title')}</Link>
    </div>
  )
}

export default HeaderBar
