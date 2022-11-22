// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// Todo = require('../../models/todo')
// 準備引入路由模組

// 首頁
router.get('/', (req, res) => {
  res.render('index')
  // Todo.find()
  //   .lean() //mongoose的method，將取出的資料精簡化
  //   .sort({ _id: 'asc' })
  //   .then((todos) => res.render('index', { todos })) // 將資料傳給 index 樣板
  //   .catch((error) => console.error(error))
})

// 匯出路由器
module.exports = router
