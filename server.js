const express = require("express");
const app = express();
const path = require("path");

//reg expression for omitting extension
app.get("^/$|/index(.html)?", (req, res) => {
     res.sendFile(path.join(__dirname, "views", "index.html"))
    // res.send("Hello Mathew")
    console.log(req.method)
})

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Backend is currently running on port ${PORT}`)
})