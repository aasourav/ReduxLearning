import React from 'react'
import { Provider } from 'react-redux'
import CounterWithHooks from './component/CounterWithHooks'
import DynamicHookCounter from './component/DynamicHookCounter'
import VariableCounter from './component/VariableCounter'
import { appStore } from './redux/store'


const App = () => {
  return (
    <Provider store={appStore}>
        <div>
          <CounterWithHooks/>
          <DynamicHookCounter/>
          <VariableCounter dynamic={true}/>

        </div>
    </Provider>
    
  )
}

export default App