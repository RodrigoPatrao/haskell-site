var express = require('express');
var router = express.Router();

router.get('/vehicles', function(req, res, next){
  if (!req.app.locals.currentUser) {
    res.render('index', { alert: true, text : req.app.locals.unauthorizedAccess });
  } else {
    res.render('vehicles');
  }
});


module.exports = router;
