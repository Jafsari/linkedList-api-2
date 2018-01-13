const express = require("express");
// app imports
const { usersHandler } = require("../handlers");
const { ensureAuthenticated } = require("../helpers");
// globals
const router = express.Router();

router.get("/login");
router.get("/signup");

router
	.route("")
	.get(ensureAuthenticated, usersHandler.getUsers)
	.post(usersHandler.createUser);

router
	.route("/:id")
	.get(usersHandler.getUser)
	.patch(usersHandler.updateUser)
	.delete(usersHandler.deleteUser);

module.exports = router;
