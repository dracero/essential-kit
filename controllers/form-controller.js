// Require mongoose
var mongoose = require('mongoose')
var User = require('../models/form')
var Detail = mongoose.model('Detail', Detail)

// Save details
exports.save = (req, res, next) => {
  var form = new Detail({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address
  })

  // Save Data
  form.save()

  // Redirect back to form
  res.redirect('/form')
}
