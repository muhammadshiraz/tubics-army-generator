const express = require('express');
const app = express();
const data = require('./data');

app.get("/spaceships", (req, res) => {
    res.send(data);
})

app.listen(5000, () => {console.log("Server started on port 5000")})