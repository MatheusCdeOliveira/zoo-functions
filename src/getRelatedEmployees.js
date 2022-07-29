const data = require('../data/zoo_data');

function isManager(id) {
  const pessoa = data.employees.find((element) => element.managers);
  return pessoa.managers.some((gerente) => gerente === id);
}

function getRelatedEmployees(managerId) {
  // let resultado = []
  // if(isManager(managerId) === true){
  //   employees.forEach((element) => {
  //     if(element.id === managerId){
  //     resultado.push(`${element.firstName} ${element.lastName}`)
  //     }
  //   })
  // }

  // return resultado
}
// if(isManager(managerId)){
//  const gerente = employees.filter((element) => {
//   return element.id === managerId
//  })
//  return gerente.
// }

console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
