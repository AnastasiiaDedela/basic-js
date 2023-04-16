const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let output = n.toString()
                .split('')
                .map(num => +n.toString().replace(num, ''))
                .sort((a,b) => b - a)[0];
            
  return output
}

module.exports = {
  deleteDigit
};
