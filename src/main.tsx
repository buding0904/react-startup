import './init'

import React, { FC } from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'

import '@/index.css'
import 'virtual:uno.css'

const Entry: FC = () => {
  return (
    <RouterProvider
      router={router}
    />
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Entry />
  </React.StrictMode>
)
