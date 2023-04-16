const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  let arrTemplate = [...arr];
  let transformedArray = []

  for(let i = 0; i < arrTemplate.length; i++){

    if(arrTemplate[i] == "--double-prev"){
      console.log("I AM HERE")
      if(arrTemplate[i - 1]){
        transformedArray.push(arrTemplate[i - 1])
      }
    }else if(arrTemplate[i] == "--discard-prev"){
      if(arrTemplate[i - 1]){
        // arrTemplate[i-1] = null
        transformedArray.pop()
      }
    }
    else if(arrTemplate[i] == "--double-next"){
      if(arrTemplate[i + 1]){
        transformedArray.push(arrTemplate[i + 1])
      }
    }
    else if(arrTemplate[i] == "--discard-next"){
      if(arrTemplate[i + 1]){
        arrTemplate[i + 1] = null
        i++
      }
    }
    else{
      transformedArray.push(arrTemplate[i])
    }

    console.log("STATE " + Number(i) + ": " + String(transformedArray))

  }
  return transformedArray
}

// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))
console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--double-prev', 1337, 4, 5]))


module.exports = {
  transform
};
