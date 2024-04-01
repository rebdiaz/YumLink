// REFERENCES: https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/

const { Signup } = require("./SignUp");
const { Authorize } = require("./Authorization");
const {CreateListing} = require("./CreateListings");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Authorize);
router.post("/createlisting", CreateListing);

module.exports = router;