const mongoose = require('mongoose');
// var bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	email: String,
	firstName: String,
	lastName: String,
	username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        //required: true
    },
	photo: String,
	experience: [],
	education: [],
	skills: [],
    },
	{ timestamps: true }

); //the blueprint


const User = mongoose.model('User', userSchema); // instance with methods
module.exports = User;

