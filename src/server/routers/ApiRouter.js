// @flow
import { Router } from 'express'
import GuildPreferences from '../model/GuildPreferences'
import { DEVELOPER_ID } from '../../common/globals'
import { MANAGE_GUILD, hasPerms } from '../../common/utils/PermissionUtils'

const router = Router()

router.get('/guildpreferences/:id', async (req, res) => {
  const preferences = await GuildPreferences.findOne({guildId: req.params.id})
  if (!preferences) {
    res.status(404).json({error: 'no preferences found'})
    return
  }
  res.json(preferences)
})

router.post('/guildpreferences/:id', (req, res) => {
  if (!req.isAuthenticated()) {
    res.status(401).json({error: 'unauthorized'})
    return
  }

  const guild = req.user.guilds.find(guild => guild.id === req.params.id)

  if ((!guild || !hasPerms(guild.permissions, MANAGE_GUILD)) && parseInt(req.user.id) !== DEVELOPER_ID) {
    res.status(403).json({error: 'forbidden'})
    return
  }

  if (!req.body || !req.body.preferences) {
    res.status(400).json({error: 'missing preferences'})
    return
  }

  if (typeof req.body.preferences !== 'string' || !req.body.preferences.match(/[0-9A-Fa-f]+/) || req.body.preferences.length > 255) {
    res.status(400).json({error: 'invalid preference string'})
    return
  }

  GuildPreferences.findOne({guildId: guild.id}, (err, doc) => {
    if (err) {
      res.status(500)
      throw err
    }
    const data = { guildId: guild.id, preferences: req.body.preferences }
    const record = (doc) ? Object.assign(doc, data) : new GuildPreferences(data)
    record.save((err) => {
      if (err) {
        res.status(500)
        throw err
      }
      res.json({success: true})
    })
  })
})

export default router
