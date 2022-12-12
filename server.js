const express = require("express");
const app = express();
const port = 3003;
const drinks = require("./models/drinks.js");
const food = require("./models/foods.js")

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render('pages/index');
  });

app.get("/drinks/", (req, res) =>{
    res.render("drinks_index.ejs", {
      allDrinks: drinks
    })
  })

  app.get("/drinks/", (req, res) => {
    res.send(drinks)
  });

  app.get("/drinks/:id", (req, res) => {
    //res.send(drinks[req.params.id])
    res.render("drinks_show.ejs", {
      //second param has to be an object
      drink: drinks[req.params.id]
    })
});

  app.get("/food/", (req, res) =>{
    res.render("food_index.ejs", {
      allFoods: food
    })
  })

  app.get("/food/", (req, res) => {
    res.send(food)
  });

  app.get("/food/:id", (req, res) => {
    //res.send(drinks[req.params.id])
    res.render("food_show.ejs", {
      //second param has to be an object
      foods: food[req.params.id]
    })
});




app.listen(port, () =>{
    console.log("Listening..")
})