var express = require('express');
var router = express.Router();

router.get('/maintenance', function(req, res){
  res.render('maintenance');
});
module.exports = router;
