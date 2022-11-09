const sectionTech = document.getElementById("formulario");
let cont = 1;

// Botão para adicionar formulário de tecnologia
const buttonAddTech = document.getElementById("add-tech");
buttonAddTech.addEventListener("click", function (ev) {
  ev.preventDefault();
  // Criando uma div
  const div = document.createElement("div");
  div.className = "inputsTech";
  // Input de tecnologia
  const labelTech = document.createElement("label");
  labelTech.innerText = "Tecnologia: ";
  labelTech.for = "tecnologia";
  const inputTech = document.createElement("input");
  inputTech.type = "text";
  inputTech.name = "tecnologia";
  InputEvent.id = "tecnologia";

  // Input de tempo de tecnologia
  const labelTempo = document.createElement("label");
  labelTempo.innerText = "Tempo de experiência: ";

  const labelPrimeira = document.createElement("label");
  labelPrimeira.innerText = " 0-2 anos: ";
  labelPrimeira.setAttribute("for", "tempo" + cont + ".1");
  const inputPrimeira = document.createElement("input");
  inputPrimeira.type = "radio";
  inputPrimeira.name = "tempo" + cont + ".1";
  inputPrimeira.id = "tempo" + cont + ".1";
  inputPrimeira.value = "0-2 anos";
  inputPrimeira.className = "inputTempo";

  const labelSegunda = document.createElement("label");
  labelSegunda.innerText = " 3-4 anos: ";
  labelSegunda.setAttribute("for", "tempo" + cont + ".2");
  const inputSegunda = document.createElement("input");
  inputSegunda.type = "radio";
  inputSegunda.name = "tempo" + +cont + ".2";
  inputSegunda.id = "tempo" + +cont + ".2";
  inputSegunda.value = "3-4 anos";
  inputSegunda.className = "inputTempo";

  const labelTerceira = document.createElement("label");
  labelTerceira.innerText = " 5+ anos: ";
  labelTerceira.setAttribute("for", "tempo" + cont + ".3");
  const inputTerceira = document.createElement("input");
  inputTerceira.type = "radio";
  inputTerceira.name = "tempo" + cont + ".3";
  inputTerceira.id = "tempo" + cont + ".3";
  inputTerceira.value = "5+ anos";
  inputTerceira.className = "inputTempo";
  cont++;

  // Adicionando os elementos
  div.appendChild(document.createElement("br"));
  div.appendChild(labelTech);
  div.appendChild(inputTech);
  div.appendChild(document.createElement("br"));
  div.appendChild(document.createElement("br"));
  div.appendChild(labelTempo);
  div.appendChild(document.createElement("br"));
  div.appendChild(inputPrimeira);
  div.appendChild(labelPrimeira);
  div.appendChild(document.createElement("br"));
  div.appendChild(inputSegunda);
  div.appendChild(labelSegunda);
  div.appendChild(document.createElement("br"));
  div.appendChild(inputTerceira);
  div.appendChild(labelTerceira);
  sectionTech.appendChild(div);
  div.appendChild(document.createElement("br"));
  div.appendChild(document.createElement("br"));
});

// Botão para remover formulário de tecnologia
const buttonRemoveTech = document.getElementById("remove-tech");
buttonRemoveTech.addEventListener("click", function (ev) {
  ev.preventDefault();

  const divRemove = document.getElementsByClassName("inputsTech");

  console.log(divRemove);
  sectionTech.removeChild(divRemove[divRemove.length - 1]);
});

// Botão para enviar elementos
const salvar = document.getElementById("submit");
salvar.addEventListener("click", function (ev) {
  ev.preventDefault();

  const nome = document.querySelector("input[name='name']").value;

  let tecnologia = "";
  document
    .querySelectorAll("input[name='tecnologia']")
    .forEach(function (item) {
      tecnologia += " " + item.value;
    });

  let tempo = "";
  document
    .querySelectorAll("input[type='radio']:checked")
    .forEach(function (item) {
      tempo += " " + item.value;
    });

  console.log(nome, tecnologia, tempo);
});
