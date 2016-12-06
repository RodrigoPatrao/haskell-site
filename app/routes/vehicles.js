var express = require('express');
var router = express.Router();

router.get('/vehicles', function(req, res){
  res.render('vehicles');
});
module.exports = router;
