const express = require('express');
const app = express();

app.use('/HTML/formstyle', express.static('HTML/formstyle'));
/*
app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.send('<b>DOES THIS WORK</b>');
  console.log('Hello World sent to Browser at: ' + new Date() ); //new line
});
*/
app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.sendFile('HTML/index.html', {root : __dirname});
});

app.get('/resi', function (req, res) {
  //res.send('Hello World!');
  res.sendFile('HTML/resi.html', {root : __dirname});
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('myapp is using Node.js version: ' + process.version); //new line
  console.log('myapp listening on port ' + port);
});