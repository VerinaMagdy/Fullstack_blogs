const mongoose = require('mongoose');
const Schema = mongoose.Schema;//define sturcture of a documnet

const translateSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Translate = mongoose.model('Translate', translateSchema);
module.exports = Translate;