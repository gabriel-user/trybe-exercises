const service = require('./service');

describe('Testes e implementações com a função "randomNumber"', () => {
  it('Verifica se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
  
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Mockando função para receber 2 parâmetros e retornar sua divisão', () =>{
    service.randomNumber = jest.fn().mockImplementationOnce((num1, num2) => num1 / num2);
  
    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber()).toBe(undefined);
  });
  
  it('Mockando função para receber 3 parâmetros e retornar sua multiplicação', () =>{
    service.randomNumber = jest
      .fn()
      .mockImplementation((num1, num2, num3) => num1 * num2 * num3);
  
    expect(service.randomNumber(10, 2, 5)).toBe(100);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2, 5);
  
    service.randomNumber.mockReset();
  });
    
  it('Mockando função para receber um parâmetros e retornar seu dobro', () =>{
    service.randomNumber = jest
    .fn()
    .mockImplementation(num => num * 2);
  
    expect(service.randomNumber(10)).toBe(20);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10);
  });
});

describe('Testes e implementações com as funções "upperCaseTranformation", "firstCharacter" e "concatTwoWords"', () => {
  it('Mockando "upperCaseTranformation" para retornar string em lowerCase', () =>{
    jest.spyOn(service, 'upperCaseTranformation')
      .mockImplementation((str) => str.toLowerCase());

    expect(service.upperCaseTranformation('GABRIEL')).toBe('gabriel');
    expect(service.upperCaseTranformation).toHaveBeenCalledTimes(1);
    expect(service.upperCaseTranformation).toHaveBeenCalledWith('GABRIEL');
  });

  it('Mockando "firstCharacter" para retornar última letra de string', () =>{ 
    jest.spyOn(service, 'firstCharacter')
      .mockImplementation((str) => str[str.length - 1]);

    expect(service.firstCharacter('Pitico')).toBe('o');
    expect(service.firstCharacter).toHaveBeenCalledTimes(1);
    expect(service.firstCharacter).toHaveBeenCalledWith('Pitico');
  });

  it('Mockando "concatTwoWords" para concatenar três strings', () =>{
    jest.spyOn(service, 'concatTwoWords')
      .mockImplementation((strA, strB, strC) => strA.concat(strB, strC));

    expect(service.concatTwoWords('gv', 'Gabriel', '22')).toBe('gvGabriel22');
    expect(service.concatTwoWords).toHaveBeenCalledTimes(1);
    expect(service.concatTwoWords).toHaveBeenCalledWith('gv', 'Gabriel', '22');
  });

  it('Retornando "upperCaseTranformation" para sua função original', () =>{
    service.upperCaseTranformation.mockRestore();
    
    expect(service.upperCaseTranformation('Gabriel')).toBe('GABRIEL');
  });
});

describe('Testando requisição de dogAPI', () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  it('Verifica que se a requisição se resolveu, teve como retorno "request success"', async () => {
    service.fetchDog.mockResolvedValue("request sucsess");

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toMatch("request sucsess");
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });

  it('Verifica que se a requisição falhou, teve como retorno "request failed"', async () => {
    service.fetchDog.mockRejectedValue("request failed");
  
    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).rejects.toMatch("request failed");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });

});

