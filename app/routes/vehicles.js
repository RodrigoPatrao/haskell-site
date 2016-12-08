var express = require('express');
var router = express.Router();

router.get('/vehicles', function(req, res, next){
  if (!req.app.locals.currentUser) {
    res.redirect('/');
  } else {
    res.render('vehicles');
  }
});


module.exports = router;
