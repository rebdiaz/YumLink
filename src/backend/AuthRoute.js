// REFERENCES: https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/

const { Signup } = require("./SignUp");
const router = require("express").Router();

router.post("/signup", Signup);

module.exports = router;