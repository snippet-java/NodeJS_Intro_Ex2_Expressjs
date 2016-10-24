var port = (process.env.VCAP_APP_PORT || 8192);
var express = require("express");
var app = express();
app.get('/', function(req, res) {
  res.send('Welcome to Node Bluemix');
})
app.listen(port);