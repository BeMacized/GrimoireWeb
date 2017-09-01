import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
// import Grid from 'material-ui/Grid'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'
import PreferencePane from './PreferencePane'
import GuildList from './GuildList'

const NoGuildSelected = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-height: 100vh;
`

class GuildView extends React.Component {
  constructor () {
    super()
    this.state = {
      activeGuild: null
    }
  }
  render () {
    return (
      <div>
        <Row>
          <Col lg={12}>
            <Paper style={{ overflow: 'hidden' }}>
              <Row noGutters>
                <Col lg={8} md={12} sm={12} xs={12} style={{ flex: 1 }} className='push-lg-4'>
                  {this.state.activeGuild
                    ? <PreferencePane guild={this.state.activeGuild} />
                    : <NoGuildSelected><h2>Please select a guild</h2></NoGuildSelected>}
                </Col>
                <Col lg={4} md={12} sm={12} xs={12} style={{ flex: 1 }} className='pull-lg-8'>
                  <Paper elevation={4} style={{ height: '100%' }}>
                    <GuildList
                      guilds={this.props.guilds}
                      active={this.state.activeGuild}
                      onSelect={(guild) => this.setState(Object.assign({}, this.state, { activeGuild: guild }))}
                      userId={this.props.userId}
                    />
                  </Paper>
                </Col>
              </Row>
            </Paper>
          </Col>
        </Row>
      </div>
    )
  }
}

GuildView.propTypes = {
  guilds: PropTypes.arrayOf(PropTypes.object.isRequired),
  userId: PropTypes.string
}

export default GuildView
