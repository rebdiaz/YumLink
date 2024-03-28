// Setup Code from https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/

// START OF SETUP CODE
const express = require ('express')
const mongoose = require('mongoose');
const cors = require('cors');
const {Signup} = require("./SignUp");
const authRoute = require("./AuthRoute");
const app = express()
const port = 3001

const MONGO_URL = "mongodb+srv://rebeccadiaz552:K0G9ztchgMgxLDP1@yumlink.q8bawkc.mongodb.net/?retryWrites=true&w=majority&appName=YumLink";

mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(port, () => console.log('Listening on port ', port))
    })
    .catch((err) => console.error(err));
// K0G9ztchgMgxLDP1


app.get("/api", (req, res) => {
    res.json({ message: "Welcome to YumLink!" });
});

app.use(express.json());

// CORS OPTIONS FROM CODE CAMP AND STACK OVERFLOW
const corsOptions ={
    origin:'http://localhost:3000',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use("/", authRoute);


// END OF SETUP CODE