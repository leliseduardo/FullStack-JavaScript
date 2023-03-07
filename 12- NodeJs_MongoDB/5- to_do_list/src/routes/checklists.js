const express = require("express");

const router = express.Router();

const Checklist = require("../models/checklist");

// Rota com requisição GET
router.get("/", (req, res) => {
  console.log("Olá");
  res.send();
});

// Rota com requisição POST
router.post("/", async (req, res) => {
  let { name } = req.body;
});

// Rotas com parâmetro
router.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`Id: ${req.params.id}`);
});

// Rotas com PUT
router.put("/:id", (req, res) => {
  console.log(req.body);
  res.send(`Put Id: ${req.params.id}`);
});

// Rota com requisição DELETE
router.delete("/:id", (req, res) => {
  console.log(req.body);
  res.send(`Delete Id: ${req.params.id}`);
});

module.exports = router;
