const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const expectedObject = (specie) => {
  const getEmployee = data.employees.find((person) => person.firstName === specie.name
  || person.lastName === specie.name || person.id === specie.id);
  if (getEmployee === undefined) {
    throw new Error('Informações inválidas');
  }
  const getSpecie = getEmployee.responsibleFor.map((element) => {
    const animais = species.filter((a) => element === a.id);
    return animais[0].name;
  });
  const loc = getEmployee.responsibleFor.map((element) => {
    const animais = species.filter((b) => element === b.id);
    return animais[0].location;
  });
  const fullName = `${getEmployee.firstName} ${getEmployee.lastName}`;
  const obj = { id: getEmployee.id, fullName: `${fullName}`, species: getSpecie, locations: loc };
  return obj;
};

const getPerson = (id) => species.find((specie) => specie.id === id);

function getEmployeesCoverage(specie) {
  if (!specie) {
    return employees.map((employe) => ({
      id: employe.id,
      fullName: `${employe.firstName} ${employe.lastName}`,
      species: employe.responsibleFor.map((a) => getPerson(a).name),
      locations: employe.responsibleFor.map((a) => getPerson(a).location),
    }));
  }
  return expectedObject(specie);
}

module.exports = getEmployeesCoverage;
