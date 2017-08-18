import Routes from './Routes'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { render } from 'react-dom'

render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
