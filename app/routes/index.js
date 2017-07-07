var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var request = require('request');

router.get('/', function(req, res){
  if (!req.app.locals.currentUser) {
    res.render('index', { alert : false});
  }
});

router.post('/', function(req, res){
  if (!req.app.locals.currentUser) {
    req.app.locals.currentUser = req.body.login;
    res.redirect('/rental/new');
  }
  // request.post({url:'https://locadoura-veiculos-cannarozzo.c9users.io/login',
  //               form: req.body },
  //               function(err,httpResponse,body){
  //                 if (!err && res.statusCode === 200) {
  //                   req.app.locals.currentUser = req.body.login;
  //                   res.json(req.body);
  //                 } else {
  //                   res.redirect('/');
  //                 }
  //               });
});

router.get('/logoff', function(req, res){
  req.app.locals.currentUser = '';
  res.redirect('/')
});

module.exports = router;
