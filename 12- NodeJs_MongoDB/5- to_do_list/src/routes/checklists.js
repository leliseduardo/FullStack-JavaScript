const express = require("express");
const checklist = require("../models/checklist");

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

router.get("/new", async (req, res) => {
  try {
    let checklist = new Checklist();
    res.status(200).render("checklists/new", { checklist: checklist });
  } catch (error) {
    res
      .status(500)
      .render("pages/error", { error: "Erro ao carregar o formulário" });
  }
});

router.get("/:id/edit", async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).render("checklists/edit", { checklist: checklist });
  } catch (error) {
    res.status(500).render("pages/error", {
      error: "Erro ao exibir a edição de lista de tarefas",
    });
  }
});

// Rota com requisição POST
router.post("/", async (req, res) => {
  let { name } = req.body.checklist;
  let checklist = new Checklist({ name });

  try {
    await checklist.save();
    res.redirect("/checklists");
  } catch (error) {
    res
      .status(422)
      .render("checklists/new", { checklist: { ...checklist, error } });
  }
});

// Rotas com parâmetro
router.get("/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).render("checklists/show", { checklist: checklist });
  } catch (error) {
    res
      .status(500)
      .render("pages/error", { error: "Erro ao exibisr as listas de tarefas" });
  }
});

// Rotas com PUT
router.put("/:id", async (req, res) => {
  let { name } = req.body.checklist;

  try {
    // await checklist.update({ name }); // Não funciona
    await Checklist.findByIdAndUpdate(req.params.id, { name });
    res.redirect("/checklists");
  } catch (error) {
    let errors = error.errors;
    res
      .status(422)
      .render("checklists/edit", { checklist: { ...checklist, errors } });
  }
});

// Rota com requisição DELETE
router.delete("/:id", async (req, res) => {
  try {
    let checklist = await Checklist.findByIdAndRemove(req.params.id);
    res.redirect("/checklists");
  } catch (error) {
    res
      .status(500)
      .render("pages/error", { error: "Erro ao deletar as listas de tarefas" });
  }
});

module.exports = router;
