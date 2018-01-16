require("dotenv").load();
const jwt = require("jsonwebtoken");
const db = require("../models");

exports.signin = function(req, res, next) {
    db.User.findOne({ userName: req.body.userName })
        .then(function(user) {
            user.comparePassword(req.body.password, function(err, isMatch) {
                console.log(req.body.password);
                if (isMatch) {
                    const token = jwt.sign(
                        { userId: user.id, userName: user.userName },
                        process.env.SECRET_KEY
                    );
                    res.status(200).json({
                        userId: user.id,
                        userName: user.userName,
                        profileImageUrl: user.profileImageUrl,
                        token
                    });
                } else {
                    console.log(err);
                    res
                        .status(400)
                        .json({ message: "Invalid Username/Password" });
                }
            });
        })
        .catch(function(err) {
            res.status(400).json({ message: "Another Invalid Email/Password" });
        });
};

// Am I logged in? Check the token, see if it is valid and party on if so!
exports.ensureAuthenticated = function(req, res, next) {
    // go to the headers
    let authHeader = req.headers["Authorization"];
    // grab the token
    let token = authHeader.split(" ")[1];
    // run jwt.verify on the token
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
        if (err) {
            return res.status(401).send({
                message: "INVALID TOKEN!"
            });
        } else {
            return next();
        }
    });
};

// Am I allowed to do X? Check the token, make sure its valid,
//check the decoded payload to make sure that
//req.params is the same as what is in the token
// users/1 -> make sure an id of 1 is in the token!
exports.ensureCorrectUser = function(req, res, next) {
    // go to the headers
    let authHeader = req.headers["Authorization"];
    // grab the token
    let token = authHeader.split(" ")[1];
    // run jwt.verify on the token
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
        // Make sure I am authorized before the next line!
        return next();
    });
};
