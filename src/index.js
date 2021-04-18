const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

require("./controllers/propertyController")(app);

app.listen(5000);
