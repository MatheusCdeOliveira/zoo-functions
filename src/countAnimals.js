const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => {
      if (!Object.keys(acc).includes(curr.name)) {
        acc[curr.name] = curr.residents.length;
      }
      return acc;
    }, {});
  }
  if (animal.specie) {
    const animalCapturado = data.species.find((element) => element.name === animal.specie);
    let retorno = animalCapturado.residents.length;
    if (animal.sex) {
      retorno = animalCapturado.residents.reduce((acc, curr) => {
        (curr.sex === animal.sex) ? acc += 1 : acc;
        return acc;
      }, 0);
    }
    return retorno;
  }
}
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
