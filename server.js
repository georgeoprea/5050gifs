'use strict;'
var express = require ('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();  
})
var gifs = [
  {
    link:'https://media.giphy.com/media/iThaM3NlpjH0Y/giphy.gif',
    title:'Pizza gif/Bingo gif'
  },
  {
    link:'https://images.cdn.circlesix.co/image/uploads/posts/2016/05/a510b570faa3481c096726012de59f45.gif',
    title:'Tesla gif/Lada image'
  }
]

app.get('/gifs', (req, res) => {
  res.send(gifs);
})

app.post('/gifs', (req, res) => {
  gifs.push(req.body);
	io.emit('gif', req.body);
  res.sendStatus(200);
})

io.on('connection', (socket) => {
	console.log("user connected");
})

app.use(express.static(__dirname));

var server = http .listen(3500, () => {
  console.log('server listening on port '+server.address().port);
});
