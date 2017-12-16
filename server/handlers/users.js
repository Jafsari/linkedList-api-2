const { User } = require('../models');
const { formatResponse } = require('../helpers');

function getUsers(request, response, next) {
   //db.items.find()
  return User.find().then(users => {
            return response.status(200).json(formatResponse(users));
          }).catch(err => {
            console.error(err);
          });
}

function getUser(request, response, next) {
  return User.find().then(user =>{
           return response.send('got user!');
          }).catch(err => {
            console.error(err);
          });
}

function updateUser(request, response, next) {
 return User.find().then(user =>{
           return response.send('got user updated!');
          }).catch(err => {
            console.error(err);
          });
}

function deleteUser(request, response, next) {
   return User.find().then(user =>{
           return response.send('got user deleted!');
          }).catch(err => {
            console.error(err);
          });
}

function createUser(request, response, next) {
  return User.create(request.body).then(user =>{
           return response.status(201).json(formatResponse(user))
          }).catch(err => {
            console.error(err);
          });
}

function renderNewUserForm(request, response, next) {
  return find().then(user =>{
           return response.send('got new user form!');
          }).catch(err => {
            console.error(err);
          });
}

function editUserForm(request, response, next) {
  return User.find().then(user =>{
           return response.send('got user edit page!');
          }).catch(err => {
            console.error(err);
          });
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  renderNewUserForm,
  editUserForm
};
