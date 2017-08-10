import React from 'react'
import PropTypes from 'prop-types'
import { Link, IndexLink } from 'react-router'

class App extends React.Component {
  render () {
    return (
      <div>
        <IndexLink to='/'>Home</IndexLink>
        {' | '}
        <Link to='/somethingthatdoesnotexist'>404</Link>
        <br />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default App
