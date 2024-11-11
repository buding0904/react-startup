import React, { createContext, ReactNode, useState } from 'react'
interface GlobalContextProps {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

const ctx = createContext<GlobalContextProps>({} as GlobalContextProps)

export const GlobalCtxProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState(0)

  return (
    <ctx.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </ctx.Provider>
  )
}

export default ctx
