const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const resultado = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      resultado.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      resultado.adult += 1;
    } else if (element.age >= 50) {
      resultado.senior += 1;
    }
  });
  return resultado;
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === undefined) {
    return 0;
  }
  const pessoas = countEntrants(entrants);
  const resultChild = pessoas.child * prices.child;
  const resultAdult = pessoas.adult * prices.adult;
  const resultSenior = pessoas.senior * prices.senior;
  return resultChild + resultAdult + resultSenior;
}
console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };
