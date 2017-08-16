var express = require('express');
var router = express.Router();
var usage = require('../modules/usage.js');

router.get('/', function(req, res, next) {
  res.send('usage');
});

router.post('/', function(req, res, next) {
  usage.addUsage(req.body);
  res.end();
});

module.exports = router;
