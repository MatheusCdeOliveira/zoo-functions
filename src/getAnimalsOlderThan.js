const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const bicho = data.species.find((element) => element.name === animal);
  const idade = bicho.residents;
  return idade.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
