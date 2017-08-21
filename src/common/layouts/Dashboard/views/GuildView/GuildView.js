import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
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
              <Grid container spacing={0} wrap='nowrap' align='stretch'>
                <Grid item lg={4} md={4} sm={12} xs={12} style={{ flex: 1 }}>
                  <Paper elevation={4} style={{ height: '100%' }}>
                    <GuildList
                      guilds={this.props.guilds}
                      active={this.state.activeGuild}
                      onSelect={(guild) => this.setState(Object.assign({}, this.state, { activeGuild: guild }))} />
                  </Paper>
                </Grid>
                <Grid item lg={8} md={8} sm={12} xs={12} style={{ flex: 1 }}>
                  {this.state.activeGuild
                    ? <PreferencePane guild={this.state.activeGuild} />
                    : <NoGuildSelected><h2>Please select a guild</h2></NoGuildSelected>}
                </Grid>
              </Grid>
            </Paper>
          </Col>
        </Row>
      </div>
    )
  }
}

GuildView.propTypes = {
  guilds: PropTypes.arrayOf(PropTypes.object.isRequired)
}

export default GuildView
