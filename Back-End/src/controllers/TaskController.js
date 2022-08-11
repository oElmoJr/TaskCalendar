
const { response } = require("express");
const {v4: uuid} = require("uuid")
const Task = require("../models/Task");

module.exports = {
    async index(request, response) {
        try {
            const tasks = await Task.find();
            return response.status(200).json({ tasks })

        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    },

    async store(request, response) {
        const {title, initialDate, endDate} = request.body;

        if (!title || !initialDate || !endDate)  {
            return response.status(400).json({ error: "Missing title, initialDate or endDate." })
        }
        
        const task = new Task({
            _id: uuid(),
            title,
            description: "",
            initialDate,
            endDate,
        })
        
        try {
            await task.save()
            return response.status(201).json({ message: "Task added succesfuly!" })

        } catch (error) {
            return response.status(400).json({ error: error.message })
        }
    },
}