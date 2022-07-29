const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((person) => person.managers.find((employee) => employee.includes(id)));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } const gerente = employees.filter((element) => element.managers.includes(managerId))
    .map((valor) => `${valor.firstName} ${valor.lastName}`);
  return gerente;
}

// let resultado = [];
// if (isManager(managerId)) {
//   employees.forEach((element) => {
//     if (element.managers.includes(managerId)) {
//       resultado.push(`${element.firstName} ${element.lastName}`);
//     }
//   });
// }
// return resultado;

module.exports = { isManager, getRelatedEmployees };
