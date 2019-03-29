/*eslint-env node*/

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/bye', function (req, res) {
  res.send('Hello World! byeee byee!');
});
app.get('/r/:input', function (req, res) {
    var input = req.params.input;
  res.send("route concept" + input + "that's the input" );
});



app.get('*', function (req, res) {
  res.send('getting wrong page!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
