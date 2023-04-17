const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
// (12 + 18)%26 = 4
// (4 - 18) % 26 = ... 12!!!
class VigenereCipheringMachine {
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  constructor(isDirect){
    this.isDirect = isDirect || false
  }

  encrypt(message, key) {
    let additionLength = message.length - key.length
    if(additionLength >= 0){
      for(let i = 0; i < additionLength; i++){
        key += key[i % key.length]
      }

      let resultMessage = ""
      for(let i = 0; i < message.length; i++){
        if(!this.alphabet.includes(message[i].toUpperCase())){
          resultMessage += message[i]
          continue
        }
        let messageIndex = this.alphabet.indexOf(message[i].toUpperCase()) + 1
        let keyIndex = this.alphabet.indexOf(key[i].toUpperCase()) + 1

        let encrypted = (messageIndex + keyIndex) % this.alphabet.length
        
        if(encrypted == 0){
          encrypted = this.alphabet.length
        }

        // console.log(`(${messageIndex} + ${keyIndex}) % ${this.alphabet.length} = ${encrypted}`)

        resultMessage += this.alphabet[encrypted - 1]
      }
      // console.log("Enc Message: ", resultMessage)
      return resultMessage
    }
  }
  decrypt(message, key) {
    let additionLength = message.length - key.length

    if(additionLength >= 0){
      for(let i = 0; i < additionLength; i++){
        key += key[i % key.length]
      }

      let resultMessage = ""
      for(let i = 0; i < message.length; i++){
        if(!this.alphabet.includes(message[i].toUpperCase())){
          resultMessage += message[i]
          continue
        }
        let messageIndex = this.alphabet.indexOf(message[i].toUpperCase()) + 1
        let keyIndex = this.alphabet.indexOf(key[i].toUpperCase()) + 1

        let decrypted = Math.abs(messageIndex - keyIndex + this.alphabet.length) % this.alphabet.length
        console.log()
        if(decrypted == 0){
          decrypted = 1
        }
        // console.log(`(${messageIndex} - ${keyIndex}) % ${this.alphabet.length} = ${decrypted}`)
        resultMessage += this.alphabet[decrypted - 1]
      }
      // console.log("Dec Message: ", resultMessage)
      return resultMessage
    }
  }
}

// let vigener = new VigenereCipheringMachine()

// let encrypted = vigener.encrypt("Nastya this is secret message to you", "bukashkakakashka")
// console.log("==============================")
// vigener.decrypt(encrypted, "bukashkakakashka")

module.exports = {
  VigenereCipheringMachine
};
