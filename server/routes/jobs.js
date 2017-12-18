// app imports
const express = require('express');
// this is helpful when working with nested routes ??
const router = express.Router({ mergeParams: true }); 

// globals
const { jobsHandler } = require('../handlers');



router
  .route('')
    .get(jobsHandler.getJobs)
    .post(jobsHandler.createJob);
    

router
  .route('/:id')
    .get(jobsHandler.getJob)
    .patch(jobsHandler.updateJob)
    .delete(jobsHandler.deleteJob);


module.exports = router;
