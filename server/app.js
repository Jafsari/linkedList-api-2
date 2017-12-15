// npm packages
const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');

// app imports

// globals
const app = express();

// app config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); // we are using the express.static middleware and specifying a path for static files to be found (__dirname is a variable that we can use to refer to the directory name of the current module)
app.use(methodOverride('_method')); // ?_method=PATCH

// app imports
const { usersRouter } = require('./routers');

app.get('/', (request, response, next) => {
  return response.redirect('/users');
});
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('Express Templating Server listening on port 3000');
});
