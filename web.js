var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var html_index = fs.readFileSync("index.html");
  response.send(html_index.toString('utf-8'));
  //Response.render("index.html");
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
