let device = {
    getAll: function(callback){
      fetch('http://h2o.iotcommons.com:3001/device')
          .then((response) => response.json())
          .then((devices) => callback(devices));
    },
    register: function(deviceInfo){
        fetch('http://h2o.iotcommons.com:3001/device', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"deviceInfo": deviceInfo})
        })
    },
    update: function(_id, deviceInfo){
        console.log(JSON.stringify({"_id": _id, "deviceInfo": deviceInfo}));
        fetch('http://h2o.iotcommons.com:3001/device', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"_id": _id, "deviceInfo": deviceInfo})
        })
    },
    remove: function(_id){
        fetch('http://h2o.iotcommons.com:3001/device', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"_id": _id})
        })
    }
};
export default device;