const express = require('express');
// app imports
const { companiesHandler } = require('../handlers');
// globals
const router = express.Router();
/*
  /items  GET, POST ^^
  /items/new  GET => renders a form to create ^
  /items/:id  GET, DELETE, PATCH
  /items/:id/edit   GET => renders a form to edit ^
*/
router
  .route('')
    .get(companiesHandler.getCompanies)
    .post(companiesHandler.createCompany);
    

router
  .route('/:id')
    .get(companiesHandler.getCompany)
    .patch(companiesHandler.updateCompany);
    .delete(companiesHandler.deleteCompany);


module.exports = router;