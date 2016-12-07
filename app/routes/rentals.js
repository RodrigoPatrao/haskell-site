var express = require('express');
var router = express.Router();

router.get('/rentals', function(req, res){
  res.render('rentals');
});
module.exports = router;
