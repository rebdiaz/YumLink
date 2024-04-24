// REFERENCE: https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/#howtoimplementthebackend

const User = require("./Login");
const bcrypt = require('bcryptjs');

//Function authenticates user by comparing the input username and password with the db entry
module.exports.Authorize = async (req, res, next) => {
    try {
        //username and password parameters passed in from frontend into request body
        const { username, password } = req.body;
        if(!username || !password ){
            return res.json({success: false, message:'All fields are required'})
        }

        //parameters compared with credentials in database
        const user = await User.findOne({ username });
        if(!user){
            //console.log('Bad1');
            return res.json({success: false, message:'Incorrect credentials' })
        }
        //bcrypt library hashes the plain text password, comparing it with the username's stored hash password
        const auth = await bcrypt.compare(password,user.password)
        if (!auth) {
            //console.log('Bad2');
            return res.json({success: false, message:'Incorrect credentials' })
        }
        console.log('User logged in');
        res.status(201).json({success: true, message: "User logged in successfully", name: user.name});
        next()
    } catch (error) {
        console.error(error);
    }

};