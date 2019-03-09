const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground2")
  .then(() => {
    console.log("Connected to MongoDB FINALLY");
  })
  .catch(err => {
    console.log("Could not connect to MongoDB ...", err);
  });

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  release_year: Number
});

const Course = mongoose.model("Course", courseSchema);

const data = [
  { name: "Hello1", author: "K1", release_year: 1996 },
  { name: "Hello2", author: "K2", release_year: 1997 },
  { name: "Hello3", author: "K3", release_year: 1998 },
  { name: "Hello4", author: "K4", release_year: 1999 },
  { name: "Hello5", author: "K5", release_year: 2000 },
  { name: "Hello6", author: "K6", release_year: 2001 },
  { name: "Hello7", author: "K7", release_year: 2002 }
];
var i = 1;
data.map(async data => {
  const course = new Course();
  course.name = data.name;
  course.author = data.authorl;
  course.release_year = data.release_year;
  const result = await course.save();
  console.log("Saving result ", i, " in the database");
  i = i + 1;
});

// async function createCourse() {
//   const course = new Course();
//   course.name = "Hello";
//   (course.author = "Dekha hai"),
//     (course.tags = ["Twinkle - twinkle", "Little Star"]);
//   const result = await course.save();
//   console.log(" In the createCourse Function", result);
// }
