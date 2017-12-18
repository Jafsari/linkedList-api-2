const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
	title: String,
	salary: Number,
	equity: Number,
	company: { //ref obj id of a company
       // the type is going to be just an id
       type: mongoose.Schema.Types.ObjectId,
       // but it will refer to the Owner model 
       // (the first parameter to the mongoose.model method) ????????????
       ref: 'company'
	}
},
   { timestamps: true }
); //the blueprint


const Job = mongoose.model('Job', jobSchema); // instance with methods
module.exports = Job;