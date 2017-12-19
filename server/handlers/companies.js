const { Company } = require('../models');
const { formatResponse } = require('../helpers');

function getCompanies(request, response, next) {
  return Company.find().populate('employees').exec().then(companies => {
            return response.status(200).json(formatResponse(companies));
          }).catch(err => {
            console.error(err);
          });
}

function getCompany(request, response, next) {
  return Company.findById(request.params.id).then(company =>{
           return response.status(200).json(formatResponse(company));
          }).catch(err => {
            console.error(err);
          });
}

function updateCompany(request, response, next) {
  return Company.findByIdAndUpdate(request.params.id, request.body, {new: true}).then(company =>{
           return response.status(200).json(formatResponse(company));
          }).catch(err => {
            console.error(err);
          });
}

function deleteCompany(request, response, next) {
  return Company.findByIdAndRemove(request.params.id).then(company =>{
           return response.status(200).json(formatResponse(company));
          }).catch(err => {
            console.error(err);
          });
}

function createCompany(request, response, next) {
  return Company.create(request.body).then(company =>{
           return response.status(201).json(formatResponse(company))
          }).catch(err => {
            console.error(err);
          });
}

module.exports = {
  getCompanies,
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany, 
};
