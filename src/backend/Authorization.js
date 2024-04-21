// REFERENCE: https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/#howtoimplementthebackend

const User = require("./Login");
const bcrypt = require('bcryptjs');

module.exports.Authorize = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if(!username || !password ){
            return res.json({success: false, message:'All fields are required'})
        }
        const user = await User.findOne({ username });
        if(!user){
            //console.log('Bad1');
            return res.json({success: false, message:'Incorrect credentials' })
        }
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