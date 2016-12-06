var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');

router.get('/admin', function(req, res){
  res.render('admin');
});

module.exports = router;
