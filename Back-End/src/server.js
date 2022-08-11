require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const connectToDatabase = require("./database");

connectToDatabase()

const app = express();
const port = 3333;

app.use(routes);

app.listen(port, () => {
    console.log(`⚡ Backend started at http://localhost:${port}`);
});
