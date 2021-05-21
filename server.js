const express = require('express');
const app = express();

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.get('/', (req, res) => res.send("Hello Project"));

let listname = [
    {id:3, name: "davy", message: "Hello"},
    {id:4, name: "daly", message: "Hello!"},
    {id:5, name: "dayy", message: "Hello everyone"},
]
app.get('/message', (req, res) => {
    res.send(listname)
});

