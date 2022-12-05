module.export = class User {
  #fullname;
  #email;
  #password;

  constructor(fullname, email, password) {
    this.#fullname = fullname;
    this.#email = email;
    this.#password = password;
  }

  login(email, password) {
    if (email === this.#email && password === this.#password)
      console.log(`Login success`);
    else console.log(`Login failed`);
  }
};
