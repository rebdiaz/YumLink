// REFERENCES: https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/

const { Signup } = require("./SignUp");
const { Authorize } = require("./Authorization");
const {CreateListing} = require("./CreateListings");
const {CreateComplaint} = require("./CreateComplaints");
const {DisplayListings} = require("./DisplayListings");
const {DisplayOneListing} = require("./DisplayOneListing");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Authorize);
router.post("/createlisting", CreateListing);
router.post("/report", CreateComplaint);

router.get("/listings", DisplayListings);
router.get("/viewlisting", DisplayOneListing);

module.exports = router;