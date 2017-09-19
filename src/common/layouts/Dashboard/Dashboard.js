// @flow
import React from 'react'
import { connect } from 'react-redux'
import Redirect from 'react-redirect'
import PropTypes from 'prop-types'
import { Row, Col, Button } from 'reactstrap'
import GuildView from './views/GuildView/GuildView'

class Dashboard extends React.Component {
  render () {
    const styles = {
      avatar: {
        display: 'inline-block',
        borderRadius: '100%',
        margin: '0 20px 0 20px',
        minWidth: '64px',
        minHeight: '64px',
        boxShadow: '0px 0px 10px 0px #f857a6',
        background: 'linear-gradient(to right, #f857a6, #ff5858)',
        border: '2px solid #f857a6',
        overflow: 'hidden'
      }
    }

    if (!this.props.loggedIn) {
      if (typeof window !== 'undefined') window.top.location.href = '/auth/discord'
      return (
        <Row>
          <Col lg={12}>
            <h1 style={{textAlign: 'center', marginTop: '50px'}}>Redirecting you to Discord...</h1>
          </Col>
        </Row>
      )
    }

    return (
      <div>
        <Row>
          <Col lg={12}>
            <div className='d-flex align-items-center' style={{justifyContent: 'space-between'}}>
              <div className='d-flex align-items-center'>
                <img style={styles.avatar} src={`https://cdn.discordapp.com/avatars/${this.props.user.id}/${this.props.user.avatar}?size=64`} />
                <h1 style={{display: 'inline-block'}}>{this.props.user.username}'s Dashboard</h1>
              </div>
              <Button href='/auth/logout' style={{}}>Log out</Button>
            </div>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <GuildView guilds={this.props.user.guilds} userId={this.props.user.id} />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <p style={{textAlign: 'center', paddingTop: '15px'}}>
              Changes may take up to 5 minutes to apply. In order to apply them immediately, use the <code>g!reloadpreferences</code> command in your guild.
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}

Dashboard.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  user: PropTypes.object
}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({
  loggedIn: !!state.dashboard.user,
  user: state.dashboard.user
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
