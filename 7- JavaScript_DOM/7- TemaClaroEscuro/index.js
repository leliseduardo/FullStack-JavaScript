function lightTheme() {
  document.body.style.backgroundColor = "#f1f5f9";
  document.body.style.color = "#212529";
}

function darkTheme() {
  document.body.style.backgroundColor = "#212529";
  document.body.style.color = "#f1f5f9";
}

function changeTheme() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

document.getElementById("lightBtn").addEventListener("click", lightTheme);
document.getElementById("darkBtn").addEventListener("click", darkTheme);
document.getElementById("switchBtn").addEventListener("click", changeTheme);
