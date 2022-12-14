const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./course-data/courses-data.json");
const categories = require("./course-data/category.json");
const blogs = require("./blog-data/blog.json");
const faq = require("./FAQ/faq.json");

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

/* Display all courses by category */
app.get("/courses/:categoryId", (req, res) => {
   const categoryId = req.params.categoryId;
   if (categoryId === "06") {
      res.send(courses);
   } else {
      const currentCourses = courses.filter((c) => c.category.category_id === categoryId);
      res.send(currentCourses);
   }
});

/* Route to display a single course details */
app.get("/course/:courseId", (req, res) => {
   const courseId = req.params.courseId;
   const currentCourse = courses.find((c) => c.id === courseId);
   res.send(currentCourse);
});

/* All Blogs Route */
app.get("/blogs", (req, res) => {
   res.send(blogs);
});

/* Single Blog by id */
app.get("/blog/:id", (req, res) => {
   const id = req.params.id;
   const currentBlog = blogs.find((b) => b.id === id);
   res.send(currentBlog);
});

/* Routes for Faq page */
app.get("/faq", (req, res) => {
   res.send(faq);
});

app.listen(port, () => {
   console.log(`Brain tech server is running on port: ${port}`);
});
