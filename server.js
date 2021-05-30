
const express = require("express");
const app = express();
const fs = require('fs');
const getUserName = (JSON.parse(fs.readFileSync('./username.json')));
const dataMessage = (JSON.parse(fs.readFileSync('./messageData.json')));

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.get("/messages", (req, res) => {
    res.send(dataMessage)
}); 
app.get("/login", (req, res) => {
    res.send(getUserName);
});
app.post("/messages", (req, res) =>{
    let  getMessage = req.body;
    dataMessage.push(getMessage);
    res.send(dataMessage);
    fs.writeFileSync("messageData.json", JSON.stringify(dataMessage))
});

