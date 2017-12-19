// npm packages
const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');

// app imports

// globals
const app = express();

// app config
app.use(bodyParser.json({ type: '*/*' }));
// we are using the express.static middleware and specifying a path for 
//static files to be found. __dirname is a variable that we can use to refer
// to the directory name of the current module)
app.use(express.static(__dirname + '/public')); 
app.use(methodOverride('_method')); // ?_method=PATCH


// app imports
const { usersRouter } = require('./routes');
const { companiesRouter } = require('./routes');
const { jobsRouter } = require('./routes');


app.get('/', (request, response, next) => { //??????how to get to companies
  return response.redirect('/users');
});

app.use('/users', usersRouter);
app.use('/companies', companiesRouter);
app.use('/jobs', jobsRouter);
//app.use('/companies/:company_id/jobs', jobsRouter);


app.listen(3000, () => {
  console.log('Scooby Doo on port 3000, ahhhrooo!');
});

