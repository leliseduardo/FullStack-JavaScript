function register(ev) {
  const sectionTag = ev.currentTarget.parentNode;
  const user = sectionTag.children.username.value;
  const password = sectionTag.children.password.value;
  const passwordConfirmation = sectionTag.children.passwordConfirmation.value;

  if (password == passwordConfirmation)
    alert("Usuário " + user + " cadastrado.");
  else alert("Senhas não conferem.");

  console.log("Evento realizado!");
}

const button = document.getElementById("register-button");

button.addEventListener("click", register);

// Botão para remover evento click de button
function removeEvent() {
  button.removeEventListener("click", register);
}

// Adicionando outro evento no button
button.addEventListener("mouseover", function (ev) {
  console.log(ev.currentTarget);
});
