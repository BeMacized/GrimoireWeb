// @Flow
import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class GrimoireLogo extends React.Component {
  render () {
    return (
      <img src={require('../../img/logos/GrimoireLogo.png')} alt='Icon' style={Object.assign({
        width: (this.props.size || 48) + 'px',
        height: (this.props.size || 48) + 'px'
      }, this.props.style)} className={styles.logo} />
    )
  }
}

GrimoireLogo.propTypes = {
  size: PropTypes.number,
  style: PropTypes.object
}
export default GrimoireLogo
