const { Job } = require('../models');
const { formatResponse } = require('../helpers');

function getJobs(request, response, next) {
   //db.items.find()
  return Job.find().then(jobs => {
            return response.status(200).json(formatResponse(jobs));
          }).catch(err => {
            console.error(err);
          });
}

function getJob(request, response, next) {
  return Job.findById(request.params.id).then(job =>{
           return response.status(200).json(formatResponse(job));
          }).catch(err => {
            console.error(err);
          });
}

function updateJob(request, response, next) {
 return Job.findByIdAndUpdate(request.params.id, request.body, {new: true}).then(job =>{
           return response.status(200).json(formatResponse(job));
          }).catch(err => {
            console.error(err);
          });
}

function deleteJob(request, response, next) {
  const company = request.body.company;
  const job = request.params.id;
   return Company.findByIdAndUpdate(company, { $pull: { jobs: job } })
    .then(() => {
      Job.findByIdAndRemove(request.params.id);
    }).then(() =>{
           return response.status(200).json(formatResponse(job));
    }).catch(err => {
            console.error(err);
    });
}

function createJob(request, response, next) {
  return Job.create(request.body).then(job =>{
           return response.status(201).json(formatResponse(job))
          }).catch(err => {
            console.error(err);
          });
}




//Since we now have two resources, pets and owners and pets are dependent on owners 
//(we can't have a pet without an owner), we need to nest the pets routes inside of owners. 

//const { Job } = require('../models');
// var db = require("../models")
// const { formatResponse } = require('../helpers');

// function getJobs(request, response, next) {
//   return db.Company.findById(request.params.company_id)
//     .populate('jobs') //??????????????????
//     .exec()
//     .then(company =>{
//            console.log("JOBS: ", company.jobs)
//            return response.status(200).json(formatResponse(company));
//           }).catch(err => {
//             console.error(err);
//           });
// }

// router.get('/owners/:owner_id/pets', (req, res, next) => {
//   return (
//     Owner.findById(req.params.owner_id)
//       .populate('pets')
//       .exec()
//       /* 
//         owner now has a property called pets 
//         which is an array of all the populated pet objects!
//       */
//       .then(owner => {
//         return res.render('pets/index', { owner });
//       })
//       .catch(err => next(err))  // pass along DB errors to handler
//   );
// });


// function getJob(request, response, next) {
//   return db.Job.findById(request.params.id)
//     .populate('company')
//     .then(job =>{
//            return response.status(200).json(formatResponse(job));
//           }).catch(err => {
//             console.error(err);
//           });
// }


// function updateJob(request, response, next) {
//  return db.Job.findByIdAndUpdate(request.params.id, request.body, {new: true})
//           .then(job =>{
//            return response.status(200).json(formatResponse(job));
//           }).catch(err => {
//             console.error(err);
//           });
// }

// function deleteJob(request, response, next) {
//    return db.Job.findByIdAndRemove(request.params.id)
//    .then(job =>{ 
//       return response.status(200).json(formatResponse(job));
//        }).catch(err => {
//            console.error(err);
//           });
// }

// router.post('/companiess/:companyId/jobs', (req, res, next) => {
//   // create a new Job based on request body
//   const newJob = new Job(request.body);
//   // extract companyId from route
//   const { companyId } = request.params;
//   // set the job's ocompany via route param
//   newJob.company = companyId;
//   // save the newJob
//   return newJob;
//     .save()
//     .then(job => {
//       // update the companies's jobs array
//       return Company.findOneAndUpdate(
//         { companyId }, // query company by route param
//         /*
//          Add new jobs's ObjectId (_id) to set of Company.pets.
//          We use $addToSet instead of $push so we can ignore duplicates!
//         */
//         { $addToSet: { jobs: job._id } }
//       );
//     })
//     .then(() => {
//       return response.status(201).json(formatResponse(job));//???
//     })
//     .catch(err => next(err)); // pass DB errors along to error handler
// });


module.exports = {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob, 
};
