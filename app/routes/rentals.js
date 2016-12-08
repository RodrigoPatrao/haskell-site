var express = require('express');
var router = express.Router();

router.get('/rentals', function(req, res, next){
  if (!req.app.locals.currentUser) {
    res.redirect('/');
  } else {
    res.render('rentals');
  }
});


module.exports = router;
