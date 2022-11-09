const form = document.getElementById("orderForm");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const nome = document.querySelector("input[name='name']").value;
  const endereco = document.querySelector("input[name='address']").value;
  const pao = document.querySelector("select[name='breadType']").value;
  const carne = document.querySelector("input[name='main']:checked").value;

  let salada = "";
  document
    .querySelectorAll("input[name='salad']:checked")
    .forEach(function (item) {
      salada += "\n- " + item.value;
    });

  const observacoes = document.querySelector(
    "textarea[name='observations']"
  ).value;

  console.log(nome, endereco, pao, carne, salada, observacoes);
});
