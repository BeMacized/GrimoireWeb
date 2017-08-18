// @flow
import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import App from './components/App/App'
import Overview from './layouts/Overview/Overview'
import CommandReference from './layouts/CommandReference/CommandReference'
import About from './layouts/About/About'
import NotFoundPage from './layouts/404/404'

export default () =>
  <App>
    <Switch>
      <Route exact path='/' component={Overview} />
      <Route path='/reference/:command?' component={CommandReference} />
      <Route path='/about' component={About} />
      <Route path='*' component={NotFoundPage} />
    </Switch>
  </App>
