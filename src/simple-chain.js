const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArray : [],
  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    if(value === null || value === undefined){
      this.chainArray.push('( )')
    }
    this.chainArray.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position < 1 || position > this.chainArray.length || !Number.isInteger(position)){
      this.chainArray = [];
      throw new Error("You can't remove incorrect link!")
    }
    this.chainArray.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    let endChain = this.chainArray.join('~~');
    this.chainArray = [];
    return endChain
  }
};

module.exports = {
  chainMaker
};
