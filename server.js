const express = require('express');
const app = express();

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.get('/', (req, res) => res.send("Hello Project"));

let messageData = [
    {id:1, name: "davy", message: "Hello"},
    {id:2, name: "daly", message: "Hello!"},
    {id:3, name: "dayy", message: "Hello everyone"},
]
app.get('/messages', (req, res) => {
    res.send(messageData)
});

app.post('/messages', (req, res) =>{
    let  getMessage = req.body;
    messageData.push(getMessage);
    res.send(messageData)
})

