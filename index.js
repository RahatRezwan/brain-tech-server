const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./course-data/courses-data.json");
const categories = require("./course-data/category.json");

/* Home Route */
app.get("/", (req, res) => {
   res.send("Hello from brain tech server");
});

/* Route to display all categories */
app.get("/categories", (req, res) => {
   res.send(categories);
});

/* Route to display all courses data */
app.get("/courses", (req, res) => {
   res.send(courses);
});

/* Route to display a single course details */
app.get("/course/:courseId", (req, res) => {
   const courseId = req.params.courseId;
   const currentCourse = courses.find((c) => c.id === courseId);
   res.send(currentCourse);
});

app.listen(port, () => {
   console.log(`Brain tech server is running on port: ${port}`);
});
