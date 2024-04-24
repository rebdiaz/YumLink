const Complaint = require("./Complaints");

//Function creates a complaint entry in database
module.exports.CreateComplaint = async (req, res, next) => {
    try {
        //Information for complaint received from frontend through request body
        const { usernameReported, date, description, usernameSubmittingForm} = req.body;

        const newComplaint = await Complaint.create({usernameReported, date, description, usernameSubmittingForm});

        res.status(201).json({success: true, message: "New complaint successfully created", newComplaint});

        next();

    } catch (error) {
        console.error(error);
    }
};