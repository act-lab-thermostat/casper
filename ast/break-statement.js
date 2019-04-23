module.exports = class BreakStatement {
  analyze(context) {
    // eslint-disable-line class-methods-use-this
    if (!context.inLoop) {
      throw new Error("Break Statement out of Loop");
    }
  }

  analyze() {
    // eslint-disable-line class-methods-use-this
    // Intentionally Empty
  }
};
