// @flow
import mongoose from 'mongoose'

export default mongoose.model('GuildPreferences', new mongoose.Schema({
  guildId: String,
  preferences: String
}))
