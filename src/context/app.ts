import React, { createContext, useState } from 'react'

interface AppContext {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

const ctx = createContext<AppContext>({} as AppContext)

export function useInitialAppContext(): AppContext {
  const [count, setCount] = useState(0)

  return { count, setCount }
}

export default ctx
