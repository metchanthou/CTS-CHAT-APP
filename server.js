
const express = require("express");
const app = express();

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.get("/", (req, res) => res.send("Hello Project"));

let messageData = [
    {id:1, name: "davy", message: "Hello"},
    {id:2, name: "daly", message: "Hello!"},
    {id:3, name: "dayy", message: "Hello everyone"},
];

let allUsername = [
                {"username": "Channary", "password": 0000},
                {"username": "Chanry", "password": 1111},
                {"username": "Kunthy", "password": 2222},
                {"username": "Sinet", "password": 3333},
                {"username": "Somphors", "password": 4444},
]

app.get("/messages", (req, res) => {
    res.send(messageData)
});

app.post("/messages", (req, res) =>{
    let  getMessage = req.body;
    messageData.push(getMessage);
    res.send(messageData)
});

app.get("/login", (req, res) =>{
    let username = req.query.username;
    let password = req.query.password;
    
    let isCheck = false;
    for (let name of allUsername) {
        if (name.username === username && name.password === parseInt(password)) {
            isCheck = true
        }
        res.send(isCheck);
        console.log(name);
    }
})