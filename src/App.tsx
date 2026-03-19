import { FC, useContext } from 'react'
import ctx, { useInitialAppContext } from '@/context/app'

const CompA: FC = () => {
  const appContext = useContext(ctx)
  console.log('CompA rerender')

  return (
    <div>
      CompA: {appContext.count}
      <button onClick={() => appContext.setCount(prev => prev + 1)}>+</button>
    </div>
  )
}

const CompB: FC = () => {
  const appContext = useContext(ctx)
  console.log('CompB rerender')
  return (
    <div>
      CompB: {appContext.countB}
      <button onClick={() => appContext.setCountB(prev => prev + 1)}>+</button>
    </div>
  )
}

const App: FC = () => {
  const initialContext = useInitialAppContext()

  return (
    <ctx.Provider value={initialContext}>
      <div className="text-red">App</div>
      <CompA />
      <CompB />
    </ctx.Provider>
  )
}

export default App
