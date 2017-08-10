import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App/App'
import HomePage from './containers/Home/Home'
import NotFoundPage from './containers/404/404'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='*' component={NotFoundPage} />
  </Route>
)
