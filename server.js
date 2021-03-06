var express = require('express');
var bodyParser = require('body-parser');
var models = require("./models");
var methodOverride = require('method-override');
var app = express();


app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var Port = process.env.Port ||3000;
app.listen(Port, function(){
	console.log("listening on port....." + Port);
});