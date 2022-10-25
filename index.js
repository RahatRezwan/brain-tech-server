const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
   res.send("Hello from brain tech server");
});

app.listen(port, () => {
   console.log(`Brain tech server is running on port: ${port}`);
});
