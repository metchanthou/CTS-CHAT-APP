<<<<<<< HEAD
const express = require('express')
=======
const express = require('express');
const app = express();

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.get('/', (req, res) => res.send("Hello Project"))
>>>>>>> 918a12bf0c9c84a6ed6fbb8a9b6171844b6431c6
