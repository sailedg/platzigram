var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', {title: 'Platzigram'});
})

app.get('/signup', function (req, res) {
  res.render('index',  {title: 'Platzigram - Signup'});
})

app.get('/signin', function (req, res) {
  res.render('index',  {title: 'Platzigram - Signin'});
})

app.get('/api/pictures', function (req, res, next){
	var pictures = [
  	{
  		user: {
  			username: 'Sailedg',
  			avatar: 'https://scontent.flim5-3.fna.fbcdn.net/v/t1.0-9/20621079_1418881191524633_7745059580574556277_n.jpg?oh=916237e4b0698a688d4fd48d7c41ddc3&oe=5A4BC913'
  		},
  		url: 'web.jpg',
  		likes: 0,
  		liked: false,
      createdAt: new Date().getTime() 
  	},
  	{
  		user: {
  			username: 'Sailedg',
  			avatar: 'https://scontent.flim5-3.fna.fbcdn.net/v/t1.0-9/20621079_1418881191524633_7745059580574556277_n.jpg?oh=916237e4b0698a688d4fd48d7c41ddc3&oe=5A4BC913'
  		},
  		url: 'web.jpg',
  		likes: 1,
  		liked: false,
      createdAt: new Date().setDate(new Date().getDate() - 10)
  	}
  ];

  setTimeout(function (){
  	res.send(pictures);
  }, 2000)
  
})

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Platzigram escuchando en el puerto 3000');
})