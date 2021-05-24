
const express = require("express");
const app = express();
const fs = require('fs');
const getUserName = (JSON.parse(fs.readFileSync('./username.json')));

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.get("/", (req, res) => res.send("Hello Project"));

let messageData = [
    {id:1, name: "Davy", message: "Hello", color: "teal"},
    {id:1, name: "Vicheka", message: "Hello", color: "purple"},
    {id:1, name: "Simeng", message: "Hello", color: "black"},
];

app.get("/messages", (req, res) => {
    res.send(messageData)
}); 
app.get("/login", (req, res) => {
    res.send(getUserName);
})

app.post("/messages", (req, res) =>{
    let  getMessage = req.body;
    messageData.push(getMessage);
    res.send(messageData)
});
