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
  const resulted = eval(input.value);
  result.value = resulted;
}
