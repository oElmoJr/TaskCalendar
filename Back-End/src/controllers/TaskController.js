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
            return response.status(201).json({ message: "Task added successfuly!" })
            
        } catch (error) {
            return response.status(400).json({ error: error.message })
        }
    },
    
    async update(request, response) {
        const {title, description, initialDate, endDate} = request.body;
        
        if (!title && !description && !initialDate && !endDate)  {
            return response.status(400).json({ error: "You must inform a new title, description, initialDate or endDate." })
        }

        if (title) response.Task.title = title
        if (description) response.Task.description = description;
        if (initialDate) response.Task.initialDate = initialDate;
        if (endDate) response.Task.endDate = endDate;
        
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