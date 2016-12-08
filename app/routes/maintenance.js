var express = require('express');
var router = express.Router();

router.get('/maintenance', function(req, res, next){
  if (!req.app.locals.currentUser) {
    res.render('index', { alert: true, text : req.app.locals.unauthorizedAccess  });
  } else {
    res.render('maintenance', { alert: false });
  }
});


module.exports = router;
