import { createContext, useState } from 'react'

interface AppContext {
  count: number
  setCount: ContextSetter<number>
}

const ctx = createContext<AppContext>({} as AppContext)

export function useInitialAppContext(): AppContext {
  const [count, setCount] = useState(0)

  return { count, setCount }
}

export default ctx
