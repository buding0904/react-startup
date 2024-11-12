import React, { FC } from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalCtxProvider } from '@/context/global'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'

import '@/index.css'
import 'virtual:uno.css'

const Entry: FC = () => {
  return (
    <GlobalCtxProvider>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </GlobalCtxProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Entry />
  </React.StrictMode>
)
