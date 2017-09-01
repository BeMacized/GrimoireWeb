
import React from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import PropTypes from 'prop-types'
import { DEVELOPER_ID } from '../../../../globals'

import { MANAGE_GUILD, hasPerms } from '../../../../utils/PermissionUtils'

const GuildList = ({guilds, active, onSelect, userId}) =>
  <List disablePadding>
    {(guilds || [])
      .sort((a, b) => a.name.localeCompare(b.name))
      .sort((x, y) => (parseInt(userId) === DEVELOPER_ID || hasPerms(x.permissons, MANAGE_GUILD) === hasPerms(y.permissions, MANAGE_GUILD)) ? 0 : hasPerms(x.permissions, MANAGE_GUILD) ? -1 : 1)
      .map(guild => {
        const isActive = active && guild.id === active.id
        const permitted = parseInt(userId) === DEVELOPER_ID || hasPerms(guild.permissions, MANAGE_GUILD)
        return (
          <ListItem
            style={isActive ? {background: 'linear-gradient(to right, #f857a6, #ff5858)'} : {}}
            button
            key={guild.id}
            disabled={!permitted}
            onClick={() => onSelect(guild)}>
            <Avatar
              style={{background: 'linear-gradient(to right, #f857a6, #ff5858)', border: '2px solid ' + (isActive ? '#FFF' : '#f857a6')}}
              src={guild.icon ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=64` : ''}>
              {guild.icon ? '' : guild.name.substring(0, 1).toUpperCase()}
            </Avatar>
            <ListItemText disableTypography primary={guild.name} secondary={permitted ? '' : <span style={{color: '#F00'}}><br />No "Manage Guild" Permission</span>} style={
              {
                color: (isActive ? '#FFF' : '#555'),
                fontWeight: (isActive ? 'bold' : 'normal')
              }
            } />
          </ListItem>
        )
      }
      )}
  </List>

GuildList.propTypes = {
  guilds: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.object,
  onSelect: PropTypes.func,
  userId: PropTypes.string
}

export default GuildList

