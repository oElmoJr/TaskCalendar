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
        const {title, description, start, end} = request.body;

        if (!title || !start || !end)  {
            return response.status(400).json({ error: "Missing title, start or end." })
        }
        
        const task = new Task({
            _id: uuid(),
            title,
            description,
            start,
            end,
        })
        
        try {
            await task.save()
            return response.status(201).json({ message: "Task added successfuly!" })
            
        } catch (error) {
            return response.status(400).json({ error: error.message })
        }
    },
    
    async update(request, response) {
        const {title, description, start, end} = request.body;
        
        if (!title && !description && !start && !end)  {
            return response.status(400).json({ error: "You must inform a new title, description, start or end." })
        }

        if (title) response.Task.title = title
        if (description) response.Task.description = description;
        if (start) response.Task.start = start;
        if (end) response.Task.end = end;
        
        try {
            await response.Task.save();
            return response.status(200).json({ message: "Task updated successfuly!" })
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
        
    },

    async delete(request, response) {
        try {
            await response.Task.remove()
            response.status(200).json({ message: "Task deleted successfuly!" })
        }catch (error) {
            return response.status(500).json({ error: error.message })
        }
    }
}