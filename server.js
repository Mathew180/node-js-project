const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`)
});

console.log("Hi Node js")