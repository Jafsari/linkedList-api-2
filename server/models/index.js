const mongoose = require("mongoose");

mongoose.Promise = Promise; // plug-in ES6 promises to Mongoose
mongoose.set("debug", true); // logs out what queries are going to MongoDB

mongoose
	.connect("mongodb://localhost/linkedList_db", {
		useMongoClient: true // Mongoose 4.11 + requires this option
	})
	.then(() => {
		console.log("Connected to MongoDB!");
	})
	.catch(err => {
		console.error(err);
	});

exports.User = require("./user"); // ??????it needs to be ./user
exports.Company = require("./company"); //check it here too
exports.Job = require("./job");
