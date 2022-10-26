const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./course-data/courses-data.json");

app.get("/", (req, res) => {
   res.send("Hello from brain tech server");
});

app.get("/courses", (req, res) => {
   res.send(courses);
});

app.listen(port, () => {
   console.log(`Brain tech server is running on port: ${port}`);
});
