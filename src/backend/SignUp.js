const User = require("./Login");


module.exports.Signup = async (req, res, next) => {
    try {
        const { password, username } = req.body;
        const existingUser = await User.findOne( {username} );
        if(existingUser){
            return res.json({message: "Pick a different username"});
        }
        const newUser = await User.create({password, username});

        res.status(201).json({message: "New user successfully created", newUser});

        next();

    } catch (error) {
        console.error(error);
    }
};