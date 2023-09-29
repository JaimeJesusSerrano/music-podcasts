import React, { useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

import routes from 'config/routes'
import LoadingSpinner from 'components/atoms/loading-spinner'

const HeaderBar = (): JSX.Element => {
  const location = useLocation()
  const { t } = useTranslation()

  const [isLocationChanged, setIsLocationChanged] = useState(true)

  useEffect(() => {
    setIsLocationChanged(true)
    const timer = setTimeout(() => setIsLocationChanged(false), 1000)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className='h-10 flex justify-between items-center px-3 border-b-2 text-xl text-cyan-500 font-medium'>
      <Link to={routes.home.path}>{t('component.header.title')}</Link>
      <div>{isLocationChanged ? <LoadingSpinner /> : ''}</div>
    </div>
  )
}

export default HeaderBar
