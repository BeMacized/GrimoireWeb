import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App/App'
import Overview from './layouts/Overview/Overview'
import CommandReference from './layouts/CommandReference/CommandReference'
import About from './layouts/About/About'
import NotFoundPage from './layouts/404/404'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Overview} />
    <Route path='/reference(/:command)' component={CommandReference} />
    <Route path='/about' component={About} />
    <Route path='*' component={NotFoundPage} />
  </Route>
)
