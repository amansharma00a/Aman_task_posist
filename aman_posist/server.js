var express = require('express'),
	morgan = require('morgan'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  ejs = require('ejs');

app.use(express.static(__dirname + '/views/ejs'));

app.set('port',(process.env.PORT || 5000));

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:admin123@ds227352.mlab.com:27352/posist', { useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {         
      // we're connected!
      console.log("Connected To MongoLab Cloud Database");
  }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');


var routes = require('./app/routes/allRoutes');

routes(app);


app.listen(app.get('port'), function(){
    console.log('Running on port', app.get('port'))
});
