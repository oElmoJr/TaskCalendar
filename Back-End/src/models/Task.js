const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    initialDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Task", taskSchema)