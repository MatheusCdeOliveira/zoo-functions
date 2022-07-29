const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const pessoa = data.employees.find((elemento) => elemento.managers);
  return pessoa.managers.some((gerente) => gerente === id);
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

// let array = ["Burl Bethea", "Ola Orloff", "Emery Elser"];

console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = { isManager, getRelatedEmployees };
