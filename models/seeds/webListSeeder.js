const shortURL = require('../web') // 載入 URLlist model
const urlList = require('../../url.json').results

const db = require('../../config/mongoose')

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < urlList.length; i++) {
    shortURL.create({
      name: urlList[i].name,
    })
  }
  console.log('done')
})
