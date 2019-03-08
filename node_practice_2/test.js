const express = require("express");
const joi = require("joi");

const app = express();
app.use(express.json());
app.set("view engine", "pug");
app.set("views", "./views");

console.log("Node current environment :", process.env.NODE_ENV);
console.log("The environment variable that is  set is :", app.get("env"));
const movies_list = [
  { movie_name: "Kuch kuch hota hai ", release_year: "1997" },
  { movie_name: "Beqraar", release_year: "2010" },
  { movie_name: "Rang de basanti ", release_year: "2008" },
  { movie_name: "Lakshya", release_year: "2007" }
];

app.get("/", (req, res) => {
  // console.log("How is it going");
  res.render("index");
  //res.send("Hello world again from the express app AGAIN ");
});

app.get("/movies", (req, res) => {
  // res.send("Hey there"
  // console.log("/movies Endpoint");
  console.log(movies_list);
  res.send(movies_list);
});

app.get("/movies/:name?", (req, res) => {
  const movie_name = movies_list.find(
    movie => movie.movie_name === req.params.name
  );
  if (!movie_name) {
    res.status(404).send("There is no movie by this name in the Database");
  } else {
    res.send(movie_name);
    console.log("The movie exists in the database");
  }
});

app.post("/movies", (req, res) => {
  const schema = {
    movie_name: joi
      .string()
      .min(3)
      .required(),
    release_year: joi
      .string()
      .min(3)
      .required()
  };
  const result = joi.validate(req.body, schema);
  if (result.error) {
    console.log(result.error.message);
    res.status(400).send(result.error);
    return;
  }
  const movie = {
    movie_name: req.body.movie_name,
    release_year: req.body.release_year
  };
  movies_list.push(movie);
  res.send(movies_list);

  console.log("New movie list is indeed  ", movies_list);
});

app.put("/movies/:name", (req, res) => {
  console.log("PUT METHOD CALLED");
  const movie = movies_list.find(movie => movie.movie_name === req.params.name);
  if (!movie) {
    res.status(404).send("There is no movie by this name in the Database");
  } else {
    console.log(
      "The movie exists and we have from postman ",
      req.body.release_year
    );
    movie.release_year = req.body.release_year; //req.body.release_year is from postMan
    console.log(req.body.release_year);

    res.send(movies_list);
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000 ....");
});
