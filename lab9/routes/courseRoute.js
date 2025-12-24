const express = require("express");
const router = express.Router();
const Course = require("../Db/courses");

// CREATE course
router.post("/", async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json(course);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET all courses
router.get("/", async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
});

// GET single course
router.get("/:id", async (req, res) => {
    const course = await Course.findById(req.params.id);
    res.json(course);
});

// UPDATE course
router.put("/:id", async (req, res) => {
    const updated = await Course.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updated);
});

// DELETE course
router.delete("/:id", async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted" });
});

module.exports = router;
