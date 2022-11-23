const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ShortURLSchema = new Schema({
  url: { type: String, required: true },
  shortURL: { type: String },
})
module.exports = mongoose.model('ShortURL', ShortURLSchema)
