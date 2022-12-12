const express = require("express");
const app = express();
const port = 3003;
const drinks = require("./models/drinks.js")

app.get("/drinks/", (req, res) =>{
    res.render("drinks_index.ejs", {
      allDrinks: drinks
    })
  })


app.get("/", (req, res) =>{
    res.send("Welcome to the Gitpub App!")
})


app.get("/drinks/", (req, res) => {
    res.send(drinks)
  });


app.get("/drinks/:id", (req, res) => {
    res.send(drinks[req.params.id])
    // res.render("drinks_show.ejs", {
    //   //second param has to be an object
    //   drink: drinks[req.params.id]
    // })
});


app.listen(port, () =>{
    console.log("Listening..")
})