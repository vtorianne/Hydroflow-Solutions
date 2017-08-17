var mongoDB = require('./mongoDB.js');
var ObjectID = require('mongodb').ObjectID;

module.exports = {
  register: function(deviceInfo){
    mongoDB.insert("device", deviceInfo);
  },
  getDeviceByID: function(deviceID, callback){
    mongoDB.findOne("device", {"deviceID": deviceID}, callback);
  },
  getDevices: function(callback){
    mongoDB.find("device", {}, callback);
  },
  updateDevice: function(_id, deviceInfo){
    mongoDB.update("device", {"_id": ObjectID(_id)}, deviceInfo);
  },
  deleteDevice: function(_id){
    mongoDB.remove("device", {"_id": ObjectID(_id)});
  }
}
