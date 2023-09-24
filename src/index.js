const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.static(`${__dirname}/../public`));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"))
})

const users = [];

app.post("/create", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    if (username && password) {
        for (let user of users) {
            if (user.username.toLowerCase() === username.toLowerCase()) {
                return res.json({message: "User already exists."})
            }
        }
        console.log(req.body);
        users.push({
            username, password
        });
        return res.json({message: "User created!"});
    }
    res.json({message: "User not created."});
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    for (let user of users) {
        if (
            user.username.toLowerCase() === username.toLowerCase() 
            && password === user.password
        ) {
            return res.json({message: "Login successful!"});
        }
    }
    res.json({message: "Login failed."})
})

const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});