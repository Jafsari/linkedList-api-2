const { User } = require('../models');
const { formatResponse } = require('../helpers');

function getUsers(request, response, next) {
   //db.items.find()
  return User.find().then(users => {
            return response.json(formatResponse(users));
          });
}

function getUser(request, response, next) {
  return User.find().then(user =>{
           return response.send('got user!');
          });
}

function updateUser(request, response, next) {
 return User.find().then(user =>{
           return response.send('got user updated!');
          });
}

function deleteUser(request, response, next) {
   return User.find().then(user =>{
           return response.send('got user deleted!');
          });
}

function createUser(request, response, next) {
  return newUser //db.items.insert({ name: 'foo', price: '50'})
            .save()
            .then(user =>{
           return response.send('got new user!')
          });
}

function renderNewUserForm(request, response, next) {
  return find().then(user =>{
           return response.send('got new user form!');
          });
}

function editUserForm(request, response, next) {
  return User.find().then(user =>{
           return response.send('got user edit page!');
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
