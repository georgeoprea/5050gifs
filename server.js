var express = require ('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

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
  res.sendStatus(200);
})

app.use(express.static(__dirname));
var server = app.listen(2530, () => {
  console.log('server listening on port '+server.address().port);
});
