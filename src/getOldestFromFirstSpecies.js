const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const pessoa = employees.find((person) => person.id === id);
  const idAnimal = pessoa.responsibleFor.filter((element, index) => index === 0);
  const animalFinal = data.species.filter((animal) => animal.id === idAnimal[0]);
  const result = animalFinal[0].residents.sort((a, b) => b.age - a.age);
  const final = [];
  final.push(result[0].name, result[0].sex, result[0].age);
  return final;
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
