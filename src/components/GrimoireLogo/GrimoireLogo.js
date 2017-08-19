// @Flow
import React from 'react'
import PropTypes from 'prop-types'

class GrimoireLogo extends React.Component {
  render () {
    return (
      <img src='/img/logos/GrimoireLogo.png' alt='Icon' style={Object.assign({
        width: (this.props.size || 48) + 'px',
        height: (this.props.size || 48) + 'px',
        borderRadius: '100%'
      }, this.props.style)} />
    )
  }
}

GrimoireLogo.propTypes = {
  size: PropTypes.number,
  style: PropTypes.object
}
export default GrimoireLogo
