// @flow
import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import App from './components/App/App'
import Overview from './layouts/Overview/Overview'
import CommandReference from './layouts/CommandReference/CommandReference'
import About from './layouts/About/About'
import NotFoundPage from './layouts/404/404'
import Dashboard from './layouts/Dashboard/Dashboard'

export default withRouter(({location}) =>
  <App>
    <Switch key={location.key} location={location}>
      <Route exact path='/' component={Overview} />
      <Route path='/reference/:command?' component={CommandReference} />
      <Route path='/about' component={About} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='*' component={NotFoundPage} />
    </Switch>
  </App>
)
