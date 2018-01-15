// npm packages
<<<<<<< HEAD
=======
require("dotenv").load();
>>>>>>> 8d9d08de4d06e515a4b7b38fdcc13fa5153182c7
const bodyParser = require("body-parser");
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
<<<<<<< HEAD

// app imports
=======
>>>>>>> 8d9d08de4d06e515a4b7b38fdcc13fa5153182c7

// globals
const app = express();

// app config
app.use(bodyParser.json({ type: "*/*" }));
<<<<<<< HEAD
=======
//allow CORS
app.use((request, response, next) => {
	response.header("Access-Control-Allow-Origin", "*");
	response.header(
		"Access-Control-Allow-Headers",
		"Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
	);
	response.header(
		"Access-Control-Allow-Methods",
		"POST,GET,PATCH,DELETE,OPTIONS"
	);
	response.header("Content-Type", "application/json");
	next();
});
>>>>>>> 8d9d08de4d06e515a4b7b38fdcc13fa5153182c7
// we are using the express.static middleware and specifying a path for
//static files to be found. __dirname is a variable that we can use to refer
// to the directory name of the current module)
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method")); // ?_method=PATCH

// app imports
const { usersRouter } = require("./routes");
const { companiesRouter } = require("./routes");
const { jobsRouter } = require("./routes");

app.get("/", (request, response, next) => {
	//??????how to get to companies
	return response.redirect("/users");
});

app.use("/users", usersRouter);
app.use("/companies", companiesRouter);
app.use("/jobs", jobsRouter);
//app.use('/companies/:company_id/jobs', jobsRouter);

app.listen(3001, () => {
<<<<<<< HEAD
	console.log("Express Templating Server listening on port 1");
=======
	console.log("Express Templating Server listening on port 3001");
>>>>>>> 8d9d08de4d06e515a4b7b38fdcc13fa5153182c7
});

//allow CORS
app.use((request, response, next) => {
	response.header("Access-Control-Allow-Origin", "*");
	response.header(
		"Access-Control-Allow-Headers",
		"Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
	);
	response.header(
		"Access-Control-Allow-Methods",
		"POST,GET,PATCH,DELETE,OPTIONS"
	);
	response.header("Content-Type", "application/json");
	next();
});
