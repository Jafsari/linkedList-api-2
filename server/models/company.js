const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
	email: String,
	company_name: String,
	company_handle: String,
	password: String
	profilePhoto: String
}); //the blueprint

const Company = mongoose.model('Company', companySchema); // instance with methods
module.exports = Company;