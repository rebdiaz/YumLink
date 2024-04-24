const User = require("./Login");

//Function creates a new user from the input on signup page
module.exports.Signup = async (req, res, next) => {
    try {
        //user's name, username, and password retrieved from request body
        const { password, username, name } = req.body;
        //only unique usernames are registered
        const existingUser = await User.findOne( {username} );
        if(existingUser){
            return res.json({success: false, message: "Pick a different username"});
        }
        //new user document created in database
        const newUser = await User.create({password, username, name});

        res.status(201).json({success: true, message: "New user successfully created", newUser});

        next();

    } catch (error) {
        console.error(error);
    }
};