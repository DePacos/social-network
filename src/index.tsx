import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { AppThemeProvider } from '@/app/providers/AppThemeProvider'
import { router } from '@/app/routers/AppRouter'
import { store } from '@/app/store'
import { GlobalStyles } from '@/app/styles/global.styles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>,
)
