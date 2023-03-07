const express = require("express");

const router = express.Router();

const Checklist = require("../models/checklist");

// Rota com requisição GET
router.get("/", async (req, res) => {
  try {
    let checklist = await Checklist.find({});
    res.status(200).json(checklist);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Rota com requisição POST
router.post("/", async (req, res) => {
  let { name } = req.body;

  try {
    let checklist = await Checklist.create({ name });
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
});

// Rotas com parâmetro
router.get("/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
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
