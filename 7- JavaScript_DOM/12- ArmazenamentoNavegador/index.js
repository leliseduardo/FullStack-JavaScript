document.getElementById("sessionBtn").addEventListener("click", function () {
  const info = document.getElementById("session");
  sessionStorage.setItem("info", info.value);
  info.value = "";
});

document.getElementById("readSesssion").addEventListener("click", function () {
  const sessionInfo = sessionStorage.getItem("info");
  alert("O valor armazenado na session é: " + sessionInfo);
});

document.getElementById("localBtn").addEventListener("click", function () {
  const info = document.getElementById("local");
  localStorage.setItem("info", info.value);
  info.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const localInfo = localStorage.getItem("info");
  alert("A informação constida em local storage é: " + localInfo);
});

document.getElementById("cookieBtn").addEventListener("click", function () {
  const info = document.getElementById("cookie");
  // cookieName=value; expires=UTCStringDate; path=/;
  const name = "info=" + info.value + ";";
  const expiration = "expires=" + new Date(2022, 10, 13) + ";";
  const path = "path=/;";
  document.cookie = name + expiration + path;
  info.value = "";
  console.log(document.cookie);
});
