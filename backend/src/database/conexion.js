const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/angular-node-jwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("La base de datos esta conectada"))
  .catch((error) => console.log(error));
