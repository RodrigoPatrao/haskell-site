var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');

router.get('/', function(req, res){
  if (!req.app.locals.currentUser) {
    res.render('index', { alert : false });
  } else {
    res.redirect('/clients');
  }
});

router.post('/', function(req, res){
  if (!req.app.locals.currentUser) {
    req.app.locals.currentUser = req.body.login;
    res.redirect('/clients');
  }
});

router.get('/logoff', function(req, res){
  req.app.locals.currentUser = '';
  res.redirect('/')
});

module.exports = router;
