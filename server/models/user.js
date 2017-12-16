const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: String,
	firstName: String,
	lastName: String,
	username: String,
	password: String,
	photo: String,
	experience: [],
	education: [],
	skills: [],
},
	{ timestamps: true }

); //the blueprint

const User = mongoose.model('User', userSchema); // instance with methods
module.exports = User;

