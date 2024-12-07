import { FC } from 'react'
import ctx, { useInitialAppContext } from '@/context/app'

const App: FC = () => {
  const initialContext = useInitialAppContext()

  return (
    <ctx.Provider value={initialContext}>
      <div className="text-red">App</div>
    </ctx.Provider>
  )
}

export default App
