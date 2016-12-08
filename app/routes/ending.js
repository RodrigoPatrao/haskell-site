var express = require('express');
var router = express.Router();

router.get('/end', function(req, res){
  if (!req.app.locals.currentUser) {
    res.render('index', { alert: true, text : req.app.locals.unauthorizedAccess });
  } else {
    res.render('end');
  }
});

module.exports = router;
