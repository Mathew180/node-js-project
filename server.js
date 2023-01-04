const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const PORT = 3500 || process.env.PORT;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.send("Hello Mathew")
    console.log(req.method)
})

app.get("^/$|/index(.html)?", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})



app.listen(PORT, () => {
    console.log(`Backend is currently running on port ${PORT}`)
})