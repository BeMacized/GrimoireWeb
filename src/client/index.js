import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import configureStore from '../common/store/configureStore'
import Routes from '../common/routes'

const store = configureStore(window.__PRELOADED_STATE__)

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
