const express = require("express");
const checkListRouter = require("./src/routes/checklists");
const rootRouter = require("./src/routes/index");
require("./config/database");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "src/views")); // Seta caminho para view
app.set("view engine", "ejs"); // Seta renderizador como ejs

app.use("/", rootRouter);
app.use("/checklists", checkListRouter);

app.listen(3000, () => {
  console.log("O servidor foi iniciado");
});

// const log = (req, res, next) => {
//   console.log(req.body);
//   console.log(`Data: ${Date.now()}`);
//   next();
// };

// app.use(log);

// app.get("/", (req, res) => {
//   res.send("<h1>Minha lista de tarefas</h1>");
// });

// app.get("/json", (req, res) => {
//   console.log(req.body);
//   res.json({ title: "Tarefa X", done: true });
// });
