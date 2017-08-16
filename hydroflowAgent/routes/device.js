var express = require('express');
var router = express.Router();
var device = require('../modules/device.js');

router.get('/', function(req, res, next) { //get devices
  device.getDevices(function(devices){
    res.send(devices);
  })
});

router.post('/', function(req, res, next) { //register device
  device.register(req.body.deviceInfo);
  res.end();
});

router.put('/', function(req, res, next) { //update device
  device.updateDevice(req.body._id, req.body.deviceInfo);
  res.end();
});

router.delete('/', function(req, res, next) { //delete device
  device.deleteDevice(req.body._id);
  res.end();
});

module.exports = router;
