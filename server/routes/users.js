const express = require('express');
// app imports
const { usersHandler } = require('../handlers');
// globals
const router = express.Router();

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
