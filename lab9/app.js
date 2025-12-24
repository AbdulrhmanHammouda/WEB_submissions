const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("./routes/courseRoute");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/courseAPI")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use("/api/courses", courseRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
