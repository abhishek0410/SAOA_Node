const express = require("express");
app = express();

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
  console.log("route parameter is ", req.params.name);
  const movie_name = movies.find(movie => {
    //console.log("the movie is ", movie.name === req.params.name);
    movie.name === req.params.name;
  });
  console.log(movie_name);
});

app.listen(3003, () => {
  console.log("Listening to port 3003");
});
