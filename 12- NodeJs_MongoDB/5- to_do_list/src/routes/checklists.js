const express = require("express");

const router = express.Router();

const Checklist = require("../models/checklist");

// Rota com requisição GET
router.get("/", async (req, res) => {
  try {
    let checklists = await Checklist.find({});
    // res.status(200).json(checklists);
    res.status(200).render("checklists/index", { checklists: checklists });
  } catch (error) {
    res
      .status(200)
      .render("pages/error", { error: "Erro ao exibisr as listas" });
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
    res.status(200).render("checklists/show", { checklist: checklist });
  } catch (error) {
    res
      .status(200)
      .render("pages/error", { error: "Erro ao exibisr as listas de tarefas" });
  }
});

// Rotas com PUT
router.put("/:id", async (req, res) => {
  let { name } = req.body;

  try {
    let checklist = await Checklist.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
});

// Rota com requisição DELETE
router.delete("/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findByIdAndRemove(req.params.id);
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
