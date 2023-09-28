import React, { Suspense } from 'react'

import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import RouterSwitch from 'components/application/router-switch'
// import ScreenLoader from 'components/molecules/screen-loader'
import i18n from 'config/i18n'
import store from 'store'

const App = (): JSX.Element => {
  const queryClient = new QueryClient()

  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  })

  return (
    <Provider store={store}>
      <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
        <BrowserRouter>
          <Suspense fallback={<></>}>
            <I18nextProvider i18n={i18n}>
              <RouterSwitch />
            </I18nextProvider>
          </Suspense>
        </BrowserRouter>
      </PersistQueryClientProvider>
    </Provider>
  )
}

export default App
