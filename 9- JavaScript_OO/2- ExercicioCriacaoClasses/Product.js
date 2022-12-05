module.export = class Product {
  #name;
  #description;
  #price;
  #inStock;

  constructor(name, description, price, inStock = 0) {
    this.#name = name;
    this.#description = description;
    this.#price = price;
    this.#inStock = inStock;
  }

  addToStock(quantity) {
    this.#inStock += quantity;
  }

  calculateDiscount(percentage) {
    return price * ((100 - percentage) / 100);
  }
};
