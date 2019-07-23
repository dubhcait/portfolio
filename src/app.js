const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require("helmet");


const controllers = require('./controllers');


const app = express();

const middleware = [
    helmet(),
    compression(),
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
  ];
  app.use(middleware);

app.disable('x-powered -by');
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.engine(
    'hbs',
    handlebars({
        extname:'hbs',
        layoutsDir:path.join(__dirname, 'views','layouts'),
        partialsDir:path.join(__dirname,'views', 'partials'),
        defaultLayout: 'mains',
      
    })
);

app.set('port', process.env.PORT|| 4000);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);

module.exports = app;