const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var deviceRouter = require('./routes/device.js');
var usageRouter = require('./routes/usage.js');

/****TEMPORARY:*FOR*USING*NON-SERVED*POST*TEST*FILE*******************/
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});
/*******************************************************************/

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use('/device', deviceRouter);
app.use('/usage', usageRouter);

app.listen(3001, function () {
  console.log('HydroFlow Agent is listening on port 3001!')
})
