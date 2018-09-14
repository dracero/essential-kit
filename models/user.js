// import mogoose
var mongoose = require('mongoose')

// import promise
mongoose.Promise = global.Promise

// create a Schema
var Users = new mongoose.Schema({
	email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  passwordConf: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Users', Users)
