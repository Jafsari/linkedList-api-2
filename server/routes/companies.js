const express = require('express');
// app imports
const { companiesHandler } = require('../handlers');
// globals
const router = express.Router();

router
  .route('')
    .get(companiesHandler.getCompanies)
    .post(companiesHandler.createCompany);
    

router
  .route('/:id')
    .get(companiesHandler.getCompany)
    .patch(companiesHandler.updateCompany)
    .delete(companiesHandler.deleteCompany);

module.exports = router;

