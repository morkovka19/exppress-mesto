const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name:{
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  link:{
    type: String,
    required: true
  },
  owner:{
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true
  },
  likes: {
    type: [mongoose.Schema.ObjectId],
    ref: 'user',
    default: []
  },
  createAt:{
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model('card', cardSchema);