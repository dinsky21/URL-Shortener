// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const URLlist = require('../../models/URL')
const generateCode = require('../../public/javascripts/urlTransform')
// 準備引入路由模組

// 首頁
router.get('/', (req, res) => {
  res.render('index')
})
router.post('/URL', (req, res) => {
  const url = req.body.url
  const shortURL = `https://${req.hostname}/${generateCode(url)}`
  // console.log(shortURL)
  return URLlist.create({ url, shortURL })
    .then(() => {
      res.redirect('/shortURL')
    })
    .catch((error) => console.log(error))
})

// 匯出路由器
module.exports = router
