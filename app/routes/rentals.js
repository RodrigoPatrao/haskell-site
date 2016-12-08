var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');

router.get('/rentals', function(req, res){
  if (!req.app.locals.currentUser) {
    res.render('index', { alert: true, text : req.app.locals.unauthorizedAccess });
  } else {
    res.render('rentals');
  }
});

router.get('/rental/new', function(req, res){
  if (!req.app.locals.currentUser) {
    res.render('index', { alert: true, text : req.app.locals.unauthorizedAccess });
  } else {
    res.render('newRental');
  }
});

module.exports = router;
