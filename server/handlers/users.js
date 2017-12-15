const { User } = require('../models');

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

function updateItem(request, response, next) {
 return User.find().then(user =>{
           return response.send('got user updated!');
          });
}

function deleteItem(request, response, next) {
   return User.find().then(user =>{
           return response.send('got user deleted!');
          });
}

function createUser(request, response, next) {
  return newUser //db.items.insert({ name: 'foo', price: '50'})
            .save()
            .then(find().then(user =>{
           return response.send('got new user!');
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
