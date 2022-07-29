const getOpeningHours = require('../src/getOpeningHours');

const expected = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  it('Verifica se não passando argumentos, a função retorna o objeto', () => {
    expect(getOpeningHours()).toEqual(expected);
  });

  it('Verifica se ao passar os argumentos Monday e 09:00-AM retorna a string: The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toMatch('The zoo is closed');
  });

  it('Verifica se ao passar os argumentos Tuesday e 09:00-AM retorna a string: The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toMatch('The zoo is open');
  });

  it('Verifica se ao passar os argumentos Wednesday e 09:00-PM retorna a string: The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toMatch('The zoo is closed');
  });

  it('Verifica se ao passar os argumentos Thu e 09:00-PM retorna o erro: The day must be valid. Example: Monday', () => {
    expect(() => getOpeningHours('Thu', '09:00-PM')).toThrow(Error);
  });

  it('Verifica se ao passar os argumentos Friday e 09:00-ZM retorna o erro: The abbreviation must be AM or PM', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(Error);
  });

  it('Verifica se ao passar os argumentos Saturday e C9:00-AM retorna o erro: The hour should represent a number', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(Error);
  });

  it('Verifica se ao passar os argumentos Sunday e 09:c0-AM retorna o erro: The minutes should represent a number', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(Error);
  });

  it('Verifica se ao passar os argumentos Monday e 13:00-AM retorna o erro: The hour must be between 0 and 12', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(Error);
  });

  it('Verifica se ao passar os argumentos Tuesday e 09:60-AM retorna o erro: The minutes must be between 0 and 59', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(Error);
  });
});
