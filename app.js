var port = (process.env.VCAP_APP_PORT || 8192);
var express = require("express");
var app = express();
app.get('/', function(req, res) {
  res.send('Welcome to Node Bluemix');
})
var fs = require('fs');
 
 
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}
 
var path = process.argv[2];
 
fs.readdir(path, function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});
app.listen(port);