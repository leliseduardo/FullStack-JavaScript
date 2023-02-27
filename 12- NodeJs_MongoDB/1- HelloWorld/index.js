const moment = require("moment");

function hello(name) {
  console.log("Hello World!");
  console.log(`Hello ${name}!`);
  console.log(moment().format("HH:mm"));
}

hello("Eduardo Lelis");
