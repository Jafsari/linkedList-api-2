const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: String,
	first_name: String,
	last_name: String,
	usersname: String,
	password: String
	profilePhoto: String
}); //the blueprint

const User = mongoose.model('User', userSchema); // instance with methods
module.exports = User;