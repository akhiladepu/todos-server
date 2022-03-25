const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors());
app.use(express.json());
const connect = require("./configs/db");
const todoController = require("./controllers/todo.controller");

app.use("/", todoController);

app.listen(2345, async () => {
    try {
        await connect();
        console.log("Connected to db at 2345");
    } catch (err) {
        console.log("err", err);
    }
});