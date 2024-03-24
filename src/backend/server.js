// Setup Code from https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/

// START OF SETUP CODE
const express = require ('express')
const mongoose = require('mongoose');
const cors = require('cors');
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
    res.json({ message: "Hello from server!" });
});

app.use(
    cors({
        origin: ["http://localhost:3001"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json());
// END OF SETUP CODE