const mongoose = require('mongoose');
// var bcrypt = require("bcrypt");
const Company = require('./company')

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
        required: true
    },
    currentCompany: {
    	type: mongoose.Schema.Types.ObjectId,
		ref: 'Company'
    },
	photo: String,
	experience: [ { type: String }],
	education: [{ 
		institution: String,
		degree: String,
		endDate: Date
	}],
	skills: [{ type: String }],
},
	{ timestamps: true }

); //the blueprinthttp://openmymind.net/Multiple-Collections-Versus-Embedded-Documents/#

userSchema.post('save', function(next){
  const user = this;
  return Company.findByIdAndUpdate(user.currentCompany, { 
    $addToSet: { employees: user._id }
}).then(() => next())});

userSchema.post('remove', function(next) {
  const user = this;
  return Company.findByIdAndUpdate(user.currentCompany, {
    $pull: { employees: user._id }
}).then(() => next())});


const User = mongoose.model('User', userSchema); // instance with methods
module.exports = User;

