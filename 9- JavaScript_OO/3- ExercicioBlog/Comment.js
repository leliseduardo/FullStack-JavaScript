module.exports = class Comments {
  constructor(userName, comment) {
    this.userName = userName;
    this.comment = comment;
  }

  getUserName() {
    return this.userName;
  }

  getComment() {
    return this.comment;
  }
};
