const express = require("express");
const app = express();

const courses = [1, 2, 3, 4, 5];
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/api/Hellosingh/year:100/month:150", (req, res) => {
  res.send(req.params);
});

//P
app.listen(3100, () => {
  console.log("Listening on port 3100");
});
