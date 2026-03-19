import { createContext, useState } from 'react'

interface AppContext {
  count: number
  setCount: ContextSetter<number>
  countB: number
  setCountB: ContextSetter<number>
}

const ctx = createContext<AppContext>({} as AppContext)

export function useInitialAppContext(): AppContext {
  const [count, setCount] = useState(0)
  const [countB, setCountB] = useState(0)

  return { count, setCount, countB, setCountB }
}

export default ctx
