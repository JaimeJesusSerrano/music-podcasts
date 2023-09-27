import React, { Suspense } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import RouterSwitch from 'components/application/router-switch'
// import ScreenLoader from 'components/molecules/screen-loader'
import i18n from 'config/i18n'
import store from 'store'

const App = (): JSX.Element => {
  const queryClient = new QueryClient()

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<></>}>
            <I18nextProvider i18n={i18n}>
              <RouterSwitch />
            </I18nextProvider>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
