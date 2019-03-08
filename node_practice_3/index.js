const express = require("express");
const joi = require("joi");
app = express();
app.use(express.json());
const movies = [
  { name: "dil_to_pagal_ha", release_year: 1995 },
  { name: "jaane_tu_ya_jaane_na", release_year: 1996 },
  { name: "kal_ho_na_ho", release_year: 1997 },
  { name: "tera_dil_hai_toh_sanmashna", release_year: 1947 }
];

app.get("/", (req, res) => {
  console.log("This is the home page");
  res.send("Hello world");
});

app.get("/movies", (req, res) => {
  console.log("This is the movies page ");
  res.send(movies);
});

app.get("/movies/:name?", (req, res) => {
  const movie_name = movies.find(movie => movie.name === req.params.name);
  if (!movie_name) {
    console.log("The if block is executed ", movie_name);
  }
});

//Posting the movies and then displaying what has been posted
//on the local web server

//POST request :
app.post("/movies", (req, res) => {
  console.log("Inside the POST -/movies endpoint");
  const schema = {
    name: joi
      .string()
      .min(3)
      .required(),
    release_year: joi
      .string()
      .min(3)
      .required()
  };
  const new_movie_added = {
    name: req.body.name,
    release_year: req.body.release_year
  };

  movies.push(new_movie_added);
  res.send(movies);
});

app.listen(3003, () => {
  console.log("Listening to port 3003");
});
