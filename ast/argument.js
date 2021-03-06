/* eslint-disable class-methods-use-this */
module.exports = class Argument {
  constructor(expression) {
    Object.assign(this, { expression });
  }

  analyze(context) {
    this.expression.analyze(context);
  }

  optimize() {
    return this;
  }
};
