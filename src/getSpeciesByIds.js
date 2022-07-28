const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const especie = data.species.filter((element) => ids.includes(element.id));
  return especie;
}

module.exports = getSpeciesByIds;
