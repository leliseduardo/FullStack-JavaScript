const Comment = require("./Comment");

module.exports = class Post {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.comments = [];
  }

  addComment(userName, content) {
    const comment = new Comment(userName, content);

    this.comments.push(comment);

    return comment;
  }

  getComments() {
    return this.comments;
  }
};
