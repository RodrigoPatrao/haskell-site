var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');

router.get('/clients', function(req, res){
  var user = req.app.locals.user;
  var date = req.app.locals.strDate;
  var time = req.app.locals.strTime;
  res.render('clients', { name: user, date: date, time: time});
});

router.post('/clients', function(req, res){
  res.send(req.body);
});

router.post('/clients/new', function(req, res){
  res.send(req.body);
});

module.exports = router;
