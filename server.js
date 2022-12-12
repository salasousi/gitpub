const express = require("express");
const app = express();
const port = 3003;


app.get("/", (req, res) =>{
    res.send("Welcome to the Gitpub App!")
})


app.get("/drinks/", (req, res) => {
    res.send(drinks)
  })


app.listen(port, () =>{
    console.log("Listening..")
})