
const express = require("express");
const app = express();
const fs = require('fs');
const getUserName = (JSON.parse(fs.readFileSync('./username.json')));

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

let messageData = [
    {id:1, name: "Davy", message: "Hello", color: "teal"},
    {id:1, name: "Vicheka", message: "Hello", color: "purple"},
    {id:1, name: "Simeng", message: "Hello", color: "black"},
];

let stickers = [
    {id: 1, icon: "😓", sign: ")"},
    {id: 2, icon: "😄", sign: "(:"},
    {id: 3, icon: "😭", sign: "cry"},
    {id: 4, icon: "🥰", sign: "love"},
    {id: 5, icon: "😷", sign: "sick"},
    {id: 6, icon: "😲", sign: "wow"},
    {id: 7, icon: "😤", sign: "bore"},
    {id: 8, icon: "🥱", sign: "sleep"},
    {id: 9, icon: "😋", sign: "haha"},
    {id: 10, icon: "🤭", sign: "angry"},
    {id: 11, icon: "😉", sign: "cute"},
    {id: 12, icon: "😝", sign: "hasha"},
    {id: 13, icon: "😎", sign: "glash"},
    {id: 14, icon: "🥶", sign: "cool"},
    {id: 15, icon: "🤗", sign: "welcome"},
    {id: 16, icon: "😴", sign: "z-sleep"},
    {id: 17, icon: "🤢", sign: "green"},
    {id: 18, icon: "🤑", sign: "money"},
]
app.get("/messages", (req, res) => {
    res.send(messageData)
}); 

app.get("/login", (req, res) => {
    res.send(getUserName);
});

app.post("/messages", (req, res) =>{
    let  getMessage = req.body;
    messageData.push(getMessage);
    res.send(messageData)
});


app.get('/emoji', (req, res) => res.send(stickers));
