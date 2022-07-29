const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Verifica se retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('Verifica se retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toMatch('NW');
  });

  it('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Passando por argumento um objeto vazio ({}) deve retornar a string Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants({})).toMatch('Parâmetro inválido, é necessário uma string');
  });

  it('Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('ola')).toBeNull();
  });
});
