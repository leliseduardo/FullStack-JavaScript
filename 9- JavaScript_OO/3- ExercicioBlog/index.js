const Post = require("./Post");
const Comment = require("./Comment");
const Author = require("./Author");

const Du = new Author("Du");
const Dudu = new Author("Dudu");
const Edu = new Author("Edu");

const post = Du.addPost("Galáxias distantes");

const comentario = post.addComment("TripaSeca", "Muito legal!");

console.log(Du);
console.log(post);
console.log(comentario);
