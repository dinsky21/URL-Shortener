const express = require('express')
const router = express.Router()
const URLlist = require('../../models/URL')

router.get('/', (req, res) => {
  res.render('shortURL')
})

module.exports = router
