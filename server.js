const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler")

const PORT = 3500 || process.env.PORT;

const weblist = ["http://localhost:3500"]

const corsOptions = {
    origin : (origin, callbackt) => {
        if(weblist.indexOf() !== -1 || !origin){
           callbackt(null, true)
        }else{
           callback(new Error('Not allowed by cors'))
        }

    },
    optionStatusSuccess:  200
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.send("Hello Mathew")
    console.log(req.method)
})

app.get("^/$|/index(.html)?", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Backend is currently running on port ${PORT}`)
})