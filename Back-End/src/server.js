const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3333;

app.use(routes);

app.listen(port, () => {
    console.log(`⚡ Backend started at http://localhost:${port}`);
});
