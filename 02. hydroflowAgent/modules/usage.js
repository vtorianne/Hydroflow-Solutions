var influxDB = require('./influxDB.js');
var getDevice = require('./device.js').getDeviceByID;

module.exports = {
  addUsage: function(usageInfo){
    getDevice(usageInfo.deviceID, function(deviceInfo){
      var tags = {
        "deviceID" : deviceInfo.deviceID,
        "category" : deviceInfo.category,
        "location" : deviceInfo.location,
        "parent"   : deviceInfo.parent
      };
      var fields = {
        //"quantity" : usageInfo.quantity,
        "microRate": usageInfo.microRate//,
        //"macroRate": usageInfo.macroRate
      };
      influxDB.write('waterflow', tags, fields, usageInfo.timestamp);
    });
  },
  getUsage: function(){

  }
}
