// import mogoose
var mongoose = require('mongoose')

// import promise
mongoose.Promise = global.Promise

// create a Schema
var Detail = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: "input name, field can not be empty"
	},
	email: {
		type: String,
		trim: true,
		required: "can not post empty email"
	},
	address: {
		type: String,
		trim: true,
		required: "can not post empty address"
	}
})
module.exports = mongoose.model('Detail', Detail)
