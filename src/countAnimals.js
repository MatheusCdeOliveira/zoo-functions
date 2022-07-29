const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const animalCapturado = data.species.find((element) => element.name === animal.specie);
  let retorno = animalCapturado.residents.length;
  if (animal.sex) {
    retorno = animalCapturado.residents.filter((element) => element.sex === animal.sex);
    retorno = retorno.length;
  }
  return retorno;
}
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

// if (animal.sex) {
//   retorno = animalCapturado.residents.reduce((acc, curr) => {
//     if (curr.sex === animal.sex) {
//       acc += 1;
//     }
//     return acc;
//   }, 0);
// }

module.exports = countAnimals;
