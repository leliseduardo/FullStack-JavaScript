const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = "Hello World";
  console.log(input.value); // Pega o valor atual
  console.log(input.getAttribute("value")); // Pega o valor default
});

document.getElementById("type").addEventListener("click", function () {
  input.type = input.type === "text" ? "radio" : "text";
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = input.placeholder === "" ? "texto base" : "";
});

document.getElementById("disable").addEventListener("click", function () {
  input.disabled = input.disabled === "false" ? "true" : "false";

  // input.setAttribute("disabled", !input.disabled);
});

document.getElementById("data").addEventListener("click", function () {
  console.log("O dado é: " + input.dataset.somethingElse);
});
