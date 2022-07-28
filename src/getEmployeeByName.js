const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const funcionario = data.employees.find(
    (element) =>
      element.firstName === employeeName || element.lastName === employeeName,
  );
  if (!employeeName) {
    return {};
  }
  return funcionario;
}

module.exports = getEmployeeByName;
