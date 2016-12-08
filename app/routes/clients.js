var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');

router.get('/clients', function(req, res, next){
  if (!req.app.locals.currentUser) {
    res.render('index', { alert: true, text : req.app.locals.unauthorizedAccess  });
  } else {
    res.render('clients');
  }
});

router.post('/clients/new', function(req, res, next){
  res.send(req.body);
});

module.exports = router;
