var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');

router.get('/maintenances', function(req, res, next){
  if (!req.app.locals.currentUser) {
    res.render('index', { alert: true, text : req.app.locals.unauthorizedAccess  });
  } else {
    res.render('maintenances');
  }
});

router.get('/maintenance/new', function(req, res, next){
  if (!req.app.locals.currentUser) {
    res.render('index', { alert: true, text : req.app.locals.unauthorizedAccess  });
  } else {
    res.render('newMaintenance');
  }
});

module.exports = router;
