import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { App } from '@/App'
import { reducer } from '@/reducer/store'
import { registerServiceWorker } from '@/registerServiceWorker'

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>,
  document.getElementById('Root') as HTMLElement
)
registerServiceWorker()
