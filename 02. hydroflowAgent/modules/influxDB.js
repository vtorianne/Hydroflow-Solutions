var Influx = require('influxdb-nodejs');
var db = 'hydroflow';
var client = new Influx('http://127.0.0.1:8086/'+db);

module.exports = {
  write: function(table, tags, fields, time){
    client.write(table)
      .tag(tags)
      .field(fields)
      .time(time)
      .then(() => console.info('write point success'))
      .catch(console.error);
  }
}
