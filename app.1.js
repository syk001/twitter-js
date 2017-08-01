const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const _ = require('lodash');
const app = express(); 


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates




app.use(function (req, res, next) {
  console.log('Request Type:', req.method + req.url)
//   console.log(req)
  next()
})

app.get('/:foobar?', function (req, res) {
//   console.log(req);
//   res.send('Hello World!')

    // var locals = {
    // title: 'An Example',
    // people: [
    //     { name: 'Gandalf'},
    //     { name: 'Frodo' },
    //     { name: 'Hermione'}
    // ]
    // };
    // nunjucks.configure('views', {noCache: true});
    // nunjucks.render('index.html', locals, function (err, output) {
    //     console.log(output);
    // });

    const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}, {name: req.params.foobar}];
    res.render( 'index', {title: 'Hall of Fame', people: people} );

})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})



