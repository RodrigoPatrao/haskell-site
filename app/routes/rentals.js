var express = require('express');
var router = express.Router();

router.get('/rentals', function(req, res){
  var user = req.app.locals.user;
  var date = req.app.locals.strDate;
  var time = req.app.locals.strTime;
  res.render('rentals', { name: user, date: date, time: time});});

module.exports = router;
