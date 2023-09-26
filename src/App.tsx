import React, { Suspense } from 'react'

import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import RouterSwitch from 'components/application/router-switch'
// import ScreenLoader from 'components/molecules/screen-loader'
import i18n from 'config/i18n'
import store from 'store'

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <I18nextProvider i18n={i18n}>
            <RouterSwitch />
          </I18nextProvider>
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
}

export default App
