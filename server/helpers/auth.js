const jwt = require("jsonwebtoken");

// Am I logged in? Check the token, see if it is valid and party on if so!
exports.ensureAuthenticated = function(req, res, next) {
    // go to the headers
    let authHeader = req.headers["Authorization"];
    // grab the token
    let token = authHeader.split(" ")[1];
    // run jwt.verify on the token
    jwt.verify(token, "HIDE ME!!! OR I WILL FIND YOU!!!", function(
        err,
        decoded
    ) {
        if (err) {
            return res.status(401).send({
                message: "INVALID TOKEN!"
            });
        } else {
            return next();
        }
    });
};

// Am I allowed to do X? Check the token, make sure its valid, check the decoded payload to make sure that req.params is the same as what is in the token
// users/1 -> make sure an id of 1 is in the token!
exports.ensureCorrectUser = function(req, res, next) {
    // go to the headers
    let authHeader = req.headers["Authorization"];
    // grab the token
    let token = authHeader.split(" ")[1];
    // run jwt.verify on the token
    jwt.verify(token, "HIDE ME!!! OR I WILL FIND YOU!!!", function(
        err,
        decoded
    ) {
        // Make sure I am authorized before the next line!
        return next();
    });
};
