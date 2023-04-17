const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dnsResults = {};
  domains.forEach(stat => {
    let resultKey = "";
    stat.split('.')
        .reverse()
        .forEach(item => {
        resultKey = `${resultKey}.${item}`;
        if(Object.keys(dnsResults).includes(resultKey)){
          dnsResults[resultKey] = dnsResults[resultKey] + 1
        }else{
          dnsResults[resultKey] = 1
        }
    });
});
return dnsResults;
}

module.exports = {
  getDNSStats
};
