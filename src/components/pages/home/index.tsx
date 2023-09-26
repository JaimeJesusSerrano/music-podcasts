import React from 'react'

// import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import MainTemplate from 'components/templates/main'
import routes from 'config/routes'

const Home = (): JSX.Element => {
  const navigate = useNavigate()
  const handleClick = () => navigate(routes.exercisesList.path)
  // const { t } = useTranslation()

  return (
    <MainTemplate>
      <div>
        <button type='button' onClick={handleClick}>
          Hello world!
        </button>
      </div>
    </MainTemplate>
  )
}

export default Home
