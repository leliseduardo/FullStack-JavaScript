const App = require("./App");

App.createUser("du@dudu.com", "Eduardo Lelis");
App.createUser("dudu@dudu.com", "Dudu Lelis");
App.createUser("edu@dudu.com", "Edu Lelis");

App.deposit("du@dudu.com", 100);

App.tranfer("du@dudu.com", "edu@dudu.com", 20);

App.changeLoanFee(10);
App.takeLoan("dudu@dudu.com", 2000, 24);

console.log(App.findUser("du@dudu.com"));
console.log(App.findUser("du@dudu.com").account);
console.log(App.findUser("dudu@dudu.com"));
console.log(App.findUser("dudu@dudu.com").account);
console.log(App.findUser("edu@dudu.com"));
console.log(App.findUser("edu@dudu.com").account);
