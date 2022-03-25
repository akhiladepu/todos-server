const express = require("express");
const router = express.Router();
const Todo = require("../models/todo.model");

router.get("/todos", async (req, res) => {
    const todos = await Todo.find().lean().exec();
    res.send(todos);
})

router.post("/todos", async (req, res) => {
    const todo = await Todo.create(req.body);
    res.send(todo);
})

module.exports = router;