var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/routes.js');


// Configuration 
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));

// Routes 
app.use('/', routes);


app.listen(3001, () => console.log('Server started!'));
