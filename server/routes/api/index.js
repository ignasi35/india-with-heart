const express = require('express')
const router = express.Router()
const passport = require(__base + 'config/passport')// eslint-disable-line no-undef
// all these routes require JWT token
router.use(passport.authenticate('jwt', { session: false }))

const routerDestination = require('./destination')
const routerImg = require('./img')
const routerTrip = require('./trip')

router.use('/destination', routerDestination)
router.use('/img', routerImg)
router.use('/trip', routerTrip)

module.exports = router
