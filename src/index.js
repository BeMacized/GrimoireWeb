import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory as history } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import routes from './routes'

render(
  <AppContainer>
    <Router history={history} routes={routes} />
  </AppContainer>,
  document.getElementById('app')
)
