var express = require ('express');
var app = express();

app.use(express.static(__dirname));
var server = app.listen(2530, () => {
  console.log('server listening on port '+server.address().port);
});
