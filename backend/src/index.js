const express = require("express");
const app = express();
const cors = require("cors");
require("./database/conexion");

app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/routes"));

app.listen(3000);
console.log("Servidor iniciado en el puerto", 3000);
