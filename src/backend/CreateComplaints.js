const Complaint = require("./Complaints");


module.exports.CreateComplaint = async (req, res, next) => {
    try {
        const { usernameReported, date, description, usernameSubmittingForm} = req.body;

        const newComplaint = await Complaint.create({usernameReported, date, description, usernameSubmittingForm});

        res.status(201).json({success: true, message: "New complaint successfully created", newComplaint});

        next();

    } catch (error) {
        console.error(error);
    }
};