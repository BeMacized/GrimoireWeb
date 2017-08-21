import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Avatar from 'material-ui/Avatar'
import SwipeableViews from 'react-swipeable-views'
import Tabs, { Tab } from 'material-ui/Tabs'
import styled from 'styled-components'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { CSSTransitionGroup } from 'react-transition-group'
import Menu, { MenuItem } from 'material-ui/Menu'
import { CircularProgress } from 'material-ui/Progress'
import request from 'superagent'
import { Button } from 'reactstrap'
import SaveIcon from 'material-ui-icons/Save'
import Snackbar from 'material-ui/Snackbar'
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader
} from 'material-ui/List'
import Switch from 'material-ui/Switch'
const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const LoadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  z-index:10;
  background-color: rgba(255,255,255, 0.8);
`

const PaneWrapper = styled.div`
  padding: 0 10% 0 10%;
`

class PreferencePane extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tabIndex: 0,
      loaded: false,
      preferences: Object.assign({}, defaultPreferences),
      lastPreferences: Object.assign({}, defaultPreferences),
      snackbarOpen: false,
      snackbarText: ''
    }
    this.setPreference = this.setPreference.bind(this)
    this.getPreferenceString = this.getPreferenceString.bind(this)
    this.loadPreferences = this.loadPreferences.bind(this)
    this.savePreferences = this.savePreferences.bind(this)
    this.loadPreferences(props.guild)
  }

  async loadPreferences (newGuild) {
    if (!newGuild) return
    // Set to defaults first
    let preferences = Object.assign({}, this.state.preferences)
    // Retrieve preferences
    try {
      const response = await request.get('/api/guildpreferences/' + newGuild.id)
      const preferenceString = response.body.preferences
      // Parse preferences
      preferences = this.getPreferencesFromString(preferenceString)
    } catch (e) { }
    // Set state
    this.setState(Object.assign({}, this.state, {
      loaded: true,
      preferences,
      lastPreferences: preferences
    }))
  }

  componentWillReceiveProps (newProps) {
    if (!this.props || !this.props.guild || newProps.guild.id !== this.props.guild.id) {
      // Reset state
      this.setState(Object.assign({}, this.state, {
        tabIndex: 0,
        loaded: false,
        lastPreferences: Object.assign({}, defaultPreferences),
        preferences: Object.assign({}, defaultPreferences)
      }))
      // Load guild preferences 
      setTimeout(() => this.loadPreferences(newProps.guild), 0)
    }
  }

  setPreference (preference, value) {
    const newPreferences = Object.assign({}, this.state.preferences)
    newPreferences[preference] = value
    this.setState(Object.assign({}, this.state, { preferences: newPreferences }))
  }

  getPreferenceString (preferences) {
    const p = preferences || this.state.preferences
    const leftPad = (str) => str.length === 1 ? '0' + str : str
    return Object.keys(p).reduce((str, pref) => {
      str += leftPad(parseInt(pref, 10).toString(16))
      str += leftPad(parseInt(p[pref], 10).toString(16))
      return str
    }, '')
  }

  getPreferencesFromString (str) {
    const preferences = {}
    for (var i = 0; i < str.length; i+=4) {
      const setting = parseInt(str.substring(i, i+2), 16)
      const value = parseInt(str.substring(i+2, i+4), 16)
      preferences[setting] = value
    }
    return preferences
  }

  async savePreferences () {
    const pfStr = this.getPreferenceString()
    if (pfStr === this.getPreferenceString(this.state.lastPreferences)) return
    this.setState(Object.assign({}, this.state, {
      loaded: false
    }))
    try {
      const response = await request.post('/api/guildpreferences/' + this.props.guild.id)
        .send({preferences: pfStr})
      if (response.body.success) {
        this.setState(Object.assign({}, this.state, {
          loaded: true,
          lastPreferences: Object.assign({}, this.state.preferences),
          snackbarOpen: true,
          snackbarText: '✔ Saved preferences'
        }))
      } else throw new Error()
    } catch (e) {
      this.setState(Object.assign({}, this.state, {
        loaded: true,
        snackbarOpen: true,
        snackbarText: '❌ Could not save preferences'
      }))
    }
    setTimeout(() => this.setState(Object.assign({}, this.state, { snackbarOpen: false })), 3000)
  }

  render () {
    const guild = this.props.guild
    return (
      <div style={{height: '100%', position: 'relative'}}>
        <CSSTransitionGroup
          transitionName='ani-fade'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {!this.state.loaded
            ? <LoadWrapper>
              <style jsx global>{`
              div[role^='progressbar'] {
                color: #f857a6 !important;
                margin-bottom: 40px;
              }
            `}</style>
              <CircularProgress color='primary' size={64} />
            </LoadWrapper>
            : ''}
        </CSSTransitionGroup>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={this.state.snackbarOpen}
          autoHideDuration={3000}
          SnackbarContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span>{this.state.snackbarText}</span>}
        />
        <AppBar position='static' >
          <Toolbar style={{background: 'linear-gradient(to left, #f857a6, #ff5858)'}}>
            <ReactCSSTransitionReplace
              transitionName='ani-zoomfade'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              component={CenterWrapper}>
              <CenterWrapper
                key={guild.id}>
                <Avatar
                  style={{
                    background: 'linear-gradient(to right, #f857a6, #ff5858)',
                    border: '2px solid #FFF',
                    marginRight: '15px'
                  }}
                  src={guild.icon ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=64` : ''}>
                  {guild.icon ? '' : guild.name.substring(0, 1).toUpperCase()}
                </Avatar>
                <h4 style={{margin: 0}}>{guild.name}</h4>
              </CenterWrapper>
            </ReactCSSTransitionReplace>
          </Toolbar>
        </AppBar>
        <Tabs
          style={{
            background: 'linear-gradient(to left, #f857a6, #ff5858)'
          }}
          value={this.state.tabIndex}
          onChange={(e, index) => this.setState(Object.assign({}, this.state, { tabIndex: index }))}
          indicatorColor='#fff'
          textColor='#fff'
          fullWidth
        >
          <Tab label='General' style={{outline: 'none'}} />
          <Tab label='Card' style={{outline: 'none'}} />
          <Tab label='Pricing' style={{outline: 'none'}} />
        </Tabs>
        <SwipeableViews
          index={this.state.tabIndex}
          onChangeIndex={(index) => this.setState(Object.assign({}, this.state, { tabIndex: index }))}>
          <PaneWrapper>
            <List subheader={<ListSubheader>General</ListSubheader>}>
              <Preference id={0} value={this.state.preferences[0]} onModify={v => this.setPreference(0, v)} />
            </List>
            <List subheader={<ListSubheader>Inline References</ListSubheader>}>
              <Preference id={1} value={this.state.preferences[1]} onModify={v => this.setPreference(1, v)} />
              <Preference id={2} value={this.state.preferences[2]} onModify={v => this.setPreference(2, v)} />
            </List>
          </PaneWrapper>
          <PaneWrapper>
            <List subheader={<ListSubheader>General</ListSubheader>}>
              <Preference id={13} value={this.state.preferences[13]} onModify={v => this.setPreference(13, v)} />
            </List>
            <List subheader={<ListSubheader>Card Properties</ListSubheader>}>
              <Preference id={3} value={this.state.preferences[3]} onModify={v => this.setPreference(3, v)} />
              <Preference id={4} value={this.state.preferences[4]} onModify={v => this.setPreference(4, v)} />
              <Preference id={5} value={this.state.preferences[5]} onModify={v => this.setPreference(5, v)} />
              <Preference id={6} value={this.state.preferences[6]} onModify={v => this.setPreference(6, v)} />
              <Preference id={7} value={this.state.preferences[7]} onModify={v => this.setPreference(7, v)} />
              <Preference id={8} value={this.state.preferences[8]} onModify={v => this.setPreference(8, v)} />
              <Preference id={9} value={this.state.preferences[9]} onModify={v => this.setPreference(9, v)} />
              <Preference id={10} value={this.state.preferences[10]} onModify={v => this.setPreference(10, v)} />
              <Preference id={11} value={this.state.preferences[11]} onModify={v => this.setPreference(11, v)} />
              <Preference id={12} value={this.state.preferences[12]} onModify={v => this.setPreference(12, v)} />
            </List>
          </PaneWrapper>
          <PaneWrapper>
            <List subheader={<ListSubheader>General</ListSubheader>}>
              <Preference id={14} value={this.state.preferences[14]} onModify={v => this.setPreference(14, v)} />
              <Preference id={15} value={this.state.preferences[15]} onModify={v => this.setPreference(15, v)} />
            </List>
          </PaneWrapper>
        </SwipeableViews>
        <CSSTransitionGroup
          transitionName='ani-fadegrow'
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}>
          {this.getPreferenceString() === this.getPreferenceString(this.state.lastPreferences) ? ''
            : <div style={{padding: '10px'}}>
              <Button onClick={this.savePreferences} style={{display: 'flex', alignItems: 'center', width: '100%'}}><SaveIcon /> Save</Button>
            </div>
          }
        </CSSTransitionGroup>
      </div>
    )
  }
}

PreferencePane.propTypes = {
  guild: PropTypes.shape({
    id: PropTypes.string.isRequired,
    owner: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string
  })
}

export default PreferencePane

class Preference extends React.Component {
  constructor () {
    super()
    this.state = {
      menuAnchor: null,
      menuOpen: false
    }
    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  openMenu (e) {
    this.setState(Object.assign({}, this.state, {
      menuAnchor: e,
      menuOpen: true
    }))
  }

  closeMenu () {
    this.setState(Object.assign({}, this.state, {
      menuAnchor: null,
      menuOpen: false
    }))
  }

  render () {
    const {id, value, onModify} = this.props
    const preference = preferenceTemplate.find(o => o.id === id)
    if (preference.type === 'SWITCH') {
      return (
        <ListItem button onClick={() => onModify(value === 1 ? 0 : 1)}>
          <ListItemText primary={preference.name} secondary={preference.description} />
          <ListItemSecondaryAction>
            <style jsx global>{`
              div[class^=MuiSwitch-icon] {
                color: #f857a6;
              }
              div[class^=MuiSwitch-bar] {
                background-color: #ff5858 !important;
              }
            `}</style>
            <Switch onClick={() => onModify(value === 1 ? 0 : 1)} checked={value === 1} />
          </ListItemSecondaryAction>
        </ListItem>
      )
    }
    if (preference.type === 'MULTI') {
      return (
        <ListItem button onClick={e => this.openMenu(e.currentTarget)}>
          <ListItemText primary={preference.name} secondary={preference.options[value][0]} />
          <Menu
            id={'menu_' + id}
            anchorEl={this.state.menuAnchor}
            open={this.state.menuOpen}
            onRequestClose={this.closeMenu}
          >
            {preference.options.map((option, index) =>
              <MenuItem
                key={option[0]}
                selected={index === value}
                onClick={(event) => {
                  this.closeMenu()
                  onModify(index)
                }}>
                {option[0]}
              </MenuItem>,
            )}
          </Menu>
        </ListItem>
      )
    }
    return (<ListItem><ListItemText primary='UNKNOWN PREFERENCE TYPE' /></ListItem>)
  }
}

Preference.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onModify: PropTypes.func
}

const preferenceTemplate = [
  {
    'type': 'MULTI',
    'id': 0,
    'name': 'Command Prefix',
    'default': 0,
    'options': [
      ['g! - Default', 'g!'],
      ['! - Exclamation Mark', '!'],
      ['_ - Underscore', '_'],
      ["@Mac's Grimoire - Mention", '@']
    ]
  },
  {
    'type': 'SWITCH',
    'id': 1,
    'name': 'Inline Card References',
    'default': 1
  },
  {
    'type': 'SWITCH',
    'id': 2,
    'name': 'Inline Price References',
    'default': 1
  },
  {
    'type': 'SWITCH',
    'id': 3,
    'name': 'Show Card Type',
    'default': 1
  },
  {
    'type': 'SWITCH',
    'id': 4,
    'name': 'Show Power / Toughness',
    'default': 1
  },
  {
    'type': 'SWITCH',
    'id': 5,
    'name': 'Show Mana Cost',
    'default': 1
  },
  {
    'type': 'SWITCH',
    'id': 6,
    'name': 'Show Converted Cost',
    'default': 1
  },
  {
    'type': 'SWITCH',
    'id': 7,
    'name': 'Show Thumbnail',
    'default': 1
  },
  {
    'type': 'SWITCH',
    'id': 8,
    'name': 'Show Oracle Text',
    'default': 1
  },
  {
    'type': 'SWITCH',
    'id': 9,
    'name': 'List Legal Formats',
    'default': 1
  },
  {
    'type': 'SWITCH',
    'id': 10,
    'name': 'List Printed Rarities',
    'default': 1
  },
  {
    'type': 'SWITCH',
    'id': 11,
    'name': 'List Printings',
    'default': 1
  },
  {
    'type': 'SWITCH',
    'id': 12,
    'name': 'Show Miscellaneous Properties',
    'description': 'E.g. Loyalty for planeswalkers, modifiers for Vanguard cards, etc.',
    'default': 1
  },
  {
    'type': 'MULTI',
    'id': 13,
    'name': 'Title link to Service',
    'default': 0,
    'options': [
      ['Gatherer (gatherer.wizards.com)', 'GATHERER'],
      ['Scryfall (scryfall.com)', 'SCRYFALL'],
      ['MagicCards.Info (magiccards.info)', 'MAGICCARDSINFO']
    ]
  },
  {
    'type': 'MULTI',
    'id': 14,
    'name': 'Presentation',
    'default': 0,
    'options': [
      ['All marketplaces: One printing (Latest default)', 'ALL_MARKETS'],
      ['Scryfall only: One printing (Latest default)', 'SCRYFALL_ONE'],
      ['Scryfall only: All printings', 'SCRYFALL_ALL']
    ]
  },
  {
    'type': 'MULTI',
    'id': 15,
    'name': 'Currency',
    'default': 0,
    'options': [
      ['Marketplace Specific', 'DEFAULT'],
      ['Force USD ($) (Convert)', 'USD'],
      ['Force EUR (€) (Convert)', 'EUR'],
      ['Force JPY (¥) (Convert)', 'JPY'],
      ['Force GBP (£) (Convert)', 'GBP']
    ]
  }
]

const defaultPreferences = preferenceTemplate.reduce((obj, entry) => {
  obj[entry.id] = entry.default
  return obj
}, {})