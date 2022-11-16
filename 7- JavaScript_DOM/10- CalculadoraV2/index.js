const allowedKeys = [
  "c",
  "(",
  ")",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "%",
  "=",
];

// Elementos do DOM
const input = document.getElementById("input-expressions");
const result = document.getElementById("input-results");
const btnMath = document.querySelectorAll(".math-btn");

// Lendo os caracteres
input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") calculate();
});

btnMath.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const value = btn.value;
    input.value += value;
  });
});

document.getElementById("btn=").addEventListener("click", calculate);
document.getElementById("btnC").addEventListener("click", function () {
  input.value = "";
});

// Calculando
function calculate() {
  result.classList.add("error");
  result.value = "Error";
  const resulted = eval(input.value);

  console.log("Chegou aqui!");
  result.classList.remove("error");
  result.value = resulted;
}

// Alterando tema
const root = document.querySelector(":root");
const tema = document.getElementById("theme-btn");

tema.addEventListener("click", function () {
  if (tema.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    tema.dataset.theme = "light";
    tema.innerText = "Tema escuro";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    tema.dataset.theme = "dark";
    tema.innerText = "Tema claro";
  }
});

// Copiando resultado
const btnCopy = document.getElementById("copy-btn");

btnCopy.addEventListener("click", function () {
  if (btnCopy.innerHTML === "Copy") {
    btnCopy.innerText = "Copied";
    btnCopy.classList.add("success");
    navigator.clipboard.writeText(result.value);
  } else {
    btnCopy.innerText = "Copy";
    btnCopy.classList.remove("success");
  }
});
