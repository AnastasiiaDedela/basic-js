const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  } = options

  addition = addition || ""
  additionRepeatTimes = additionRepeatTimes || 1
  repeatTimes = repeatTimes || 1

  if(typeof additionSeparator === "undefined"){
    additionSeparator = "|"
  }
  if(typeof additionSeparator === "boolean"){
    additionSeparator = String(additionSeparator)
  }

  if(typeof separator === "undefined"){
    separator = "+"
  }
  if(typeof separator === "boolean"){
    separator = String(separator)
  }

  let additionalString = addition

  for(let i = 1; i < additionRepeatTimes; i++){
    additionalString += (additionSeparator + addition)
  }
  console.log("==========================")
  console.log("\tAddition: ", addition)
  console.log("\tAdditional String: ", additionalString)
  console.log("==========================")

  let resultString = str + additionalString

  for(let i = 1; i < repeatTimes; i++){
    resultString += (separator + str + additionalString)
  }

  return resultString
}

module.exports = {
  repeater
};
