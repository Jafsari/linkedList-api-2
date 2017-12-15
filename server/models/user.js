const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: String,
	firstName: String,
	lastName: String,
	username: { type: 'String', unique: true },
	password: String
	photo: String
	experience: [{	
		jobTitle: String,
		company: String,
		startDate: Date,
		endDate: Date
	}],
	education: [{
		institution: String,
		degree: String,
		endDate: Date
	}],
	skills: [String],
	createdAt: { timestamp: true },
	updatedAt: { timestamp: true }

}); //the blueprint

const User = mongoose.model('User', userSchema); // instance with methods
module.exports = User;

