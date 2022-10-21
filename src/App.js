import React from 'react'
import { Provider } from 'react-redux'
import Counter from './component/Counter'
import { appStore } from './redux/store'


const App = () => {
  return (
    <Provider store={appStore}>
        <div>
          <Counter/>
        </div>
    </Provider>
    
  )
}

export default App