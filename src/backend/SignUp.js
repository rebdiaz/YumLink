const User = require("./Login");


module.exports.Signup = async (req, res, next) => {
    try {
        const { password, username, name } = req.body;
        const existingUser = await User.findOne( {username} );
        if(existingUser){
            return res.json({success: false, message: "Pick a different username"});
        }
        const newUser = await User.create({password, username, name});

        res.status(201).json({success: true, message: "New user successfully created", newUser});

        next();

    } catch (error) {
        console.error(error);
    }
};