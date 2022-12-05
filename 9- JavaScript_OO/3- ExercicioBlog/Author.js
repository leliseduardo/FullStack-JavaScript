const Post = require("./Post");

module.exports = class Author {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }

  addPost(content) {
    const post = new Post(this, content);

    this.posts.push(post);

    return post;
  }

  getPost(index) {
    return this.posts[index];
  }
};
