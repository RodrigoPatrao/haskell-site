var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');

router.get('/clients', function(req, res){
  res.render('clients');
});

router.post('/clients', function(req, res){
  res.send(req.body);
});

router.post('/clients/new', function(req, res){
  res.send(req.body);
});

module.exports = router;
