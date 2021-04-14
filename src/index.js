const express = require("express");
const app = express();

app.use(express.json());

require("./controllers/propertyController")(app);

app.listen(5000);
