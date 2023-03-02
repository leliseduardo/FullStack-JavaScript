const express = require("express");

const router = express.Router();

// Rota com requisição GET
router.get("/", (req, res) => {
  console.log("Olá");
  res.send();
});

// Rota com requisição POST
router.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
});

// Rotas com parâmetro
router.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`Id: ${req.params.id}`);
});

module.exports = router;
