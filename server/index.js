const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("This is an endpoint!");
});

app.listen(3000, '0.0.0.0', () => {
    console.log("Listening on port 3000");
});