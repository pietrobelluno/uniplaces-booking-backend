const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://user:e6cIFnZTbQdwwqx0@cluster0.jqema.mongodb.net/uniplaces", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = mongoose;
