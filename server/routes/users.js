const express = require('express');
// app imports
const { usersHandler } = require('../handlers');
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
    .get(usersHandler.getUsers)
    .post(usersHandler.createUser);
    

router
  .route('/:id')
    .get(usersHandler.getUser)
    .patch(usersHandler.updateUser)
    .delete(usersHandler.deleteUser);


module.exports = router;
