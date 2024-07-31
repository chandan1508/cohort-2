const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mukhiyachandan179:epm3rkJtrcehFEYW@cluster0.79qjqnx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}