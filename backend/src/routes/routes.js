const { Router } = require("express");
const router = Router();

const userFunction = require("./User.functions");

//router.get("/", (req, res) => res.send("Hola mundo"));

router.post("/registrar", async (req, res) => {
  const { email, password } = req.body;
  const token = await userFunction.register(email, password);
  res.status(200).json({ token });
});

router.post("/entrar", async (req, res) => {
  const { email, password } = req.body;
  const token = await userFunction.login(email, password);
  if (token === null) {
    return res.status(401).send("Usuario no encontrado");
  }
  res.status(200).json({ token });
});

router.get("/tareasPublicas", (req, res) => {
  const tareas = [
    {
      _id: 1,
      name: "Jugar",
      description: "Ir a la cancha a jugar Futbol.",
      date: "2020-06-09T15:50:54.788Z",
    },
    {
      _id: 2,
      name: "Angular",
      description: "Estudiar Angular con el consumo de una API REST",
      date: "2020-06-09T15:50:54.788Z",
    },
    {
      _id: 3,
      name: "FIFA",
      description: "Jugar el modo carrera de FIFA 20 en el PS4",
      date: "2020-06-09T15:50:54.788Z",
    },
  ];
  res.json(tareas);
});

router.get("/tareasPrivadas", verifyToken, (req, res) => {
  const tareas = [
    {
      _id: 1,
      name: "Banco",
      description: "Consignar dinero en el banco.",
      date: "2020-06-09T15:50:54.788Z",
    },
    {
      _id: 2,
      name: "Cobrar",
      description: "Retirar el sueldo mensual",
      date: "2020-06-09T15:50:54.788Z",
    },
    {
      _id: 3,
      name: "Prima",
      description: "Reclamar el dinero de la prima de mitad de año",
      date: "2020-06-09T15:50:54.788Z",
    },
  ];
  res.json(tareas);
});

function verifyToken(req, res, next) {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).send("Acceso denegado");
  }
  const token = header.split(" ")[1];
  if (token === null) {
    return res.status(401).send("Acceso denegado");
  }
  const payload = userFunction.extraerToken(token);
  req.userId = payload._id;
  next();
}

module.exports = router;
