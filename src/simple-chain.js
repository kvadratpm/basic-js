const CustomError = require("../extensions/custom-error");

const chainMaker = {
  value: [],
  getLength() {
    return this.value.length
  },
  addLink(value=' ') {
    this.value.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (this.value[position - 1]) {
      this.value.splice(position - 1, 1)
      return this;
    } else {
      throw new Error();
    }
  },
  reverseChain() {
    this.value = this.value.reverse()
    return this;
  },
  finishChain() {
    const arr = this.value.map((elem) => `( ${elem} )`);
    this.value = '';
    return arr.join('~~');
  }
};

module.exports = chainMaker;
