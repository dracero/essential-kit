// Require mongoose
var mongoose = require('mongoose')
var User = require('../models/table')
var Detail = mongoose.model('Detail', Detail)

// Find all employees
    Detail.find({}).toArray(function(err, name) {
        if (err) {
            res.send(err);
        } else if (name.length) {
            res.render('namelist', {
                'namelist': name[0].data,
            });
        } else {
            res.send('No documents found');
        }
        
    });

  // Redirect back to form
  res.redirect('/table')
}
