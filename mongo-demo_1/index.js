const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to mongoDB ...."))
  .catch(err => console.log("Could not connect to MongoDB ...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Angular course",
    author: "WhoKnows",
    tags: ["node", "backend"],
    isPublished: true
  });

  const result = await course.save();
  console.log("The result is ", result);
}

async function getCourses() {
  const courses = await Course.find();
  console.log(courses);
}

getCourses();
