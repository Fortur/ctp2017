const express = require('express'),
    nunjucks = require('nunjucks'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    app = express();


app.use(
    express.static(__dirname + '/src'),
    bodyParser(),
    cookieParser()
);

nunjucks.configure(__dirname + '/src/view', {
    autoescape: true,
    cache: false,
    express: app
});

app.use('/', require('./router'));
app.listen(require('./config.js').port);

console.log("Running at Port " + require('./config.js').port);