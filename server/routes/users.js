const express = require("express");
// app imports
const { usersHandler } = require("../handlers");
const {
	ensureAuthenticated,
	ensureCorrectUser,
	signin
} = require("../helpers/auth");
// globals
const router = express.Router();

router.route("").get(ensureAuthenticated, usersHandler.getUsers);

router.route("/signin").post(signin);
router.route("/signup").post(usersHandler.createUser);

router
	.route("/:id")
	.get(usersHandler.getUser)
	.patch(ensureCorrectUser, usersHandler.updateUser)
	.delete(usersHandler.deleteUser);

module.exports = router;
