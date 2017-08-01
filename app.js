const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const _ = require('lodash');
const app = express(); 
const routes = require('./routes');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates
app.use(express.static('public'))



app.use(function (req, res, next) {
  console.log('Request Type:', req.method + req.url)
//   console.log(req)
  next()
})

app.use('/', routes);




app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})






