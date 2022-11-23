const express = require('express')
const router = express.Router()
const URLlist = require('../../models/URL')
const generateCode = require('../../public/javascripts/urlTransform')
const PORT = process.env.PORT || 3000

router.post('/', (req, res) => {
  const url = req.body.url
  const shortURL = `http://${req.hostname}:${PORT}/${generateCode(url)}`
  const web = { url, shortURL }
  return URLlist.create({ url, shortURL })
    .then(res.render('shortURL', { web }))
    .catch((error) => console.log(error))
})

module.exports = router
