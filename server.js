const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
    res.send("Hello Mathew")
    console.log(req.method)
})

app.get("^/$|/index(.html)?", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})

const PORT = 3500 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Backend is currently running on port ${PORT}`)
})