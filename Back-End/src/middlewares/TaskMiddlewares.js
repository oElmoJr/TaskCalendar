const { validate: isUuid } = require("uuid");
const Task = require("../models/Task")

module.exports = {
    async validateId(request, response, next) {
        const { id } = request.params;

        // if (!isUuid(id)) {
        //     return response.status(400).json({ error: "Invalid ID." })
        // }

        try {
            const task = await Task.findById(id);
            response.Task = task;

            if (!task) {
                return response.status(404).json({ error: "Task not found."});
            }

        } catch (error) {
            return response.status(500).json({ error: error.message })
        }

        next();
    }
}