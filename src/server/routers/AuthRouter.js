// @flow
import { Router } from 'express'
import passport from 'passport'
import { Strategy as DiscordStrategy } from 'passport-discord'

passport.serializeUser((user, done) => done(null, user))

passport.deserializeUser((user, done) => done(null, user))

passport.use(new DiscordStrategy(
  {
    clientID: process.env.RAZZLE_DISCORD_CLIENT_ID,
    clientSecret: process.env.RAZZLE_DISCORD_CLIENT_SECRET,
    callbackURL: process.env.RAZZLE_DISCORD_CALLBACK_URL || 'http://127.0.0.1:3000/auth/discord/callback',
    scope: ['identify', 'guilds']
  },
  (accessToken, refreshToken, profile, done) => done(null, profile)
))

const router = Router()

router.get('/discord', passport.authenticate('discord', { scope: ['identify', 'guilds'] }))

router.get('/discord/callback', passport.authenticate('discord', { failureRedirect: '/' }), (req, res) => res.redirect('/dashboard'))

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

export default router
