const { encode, decode, techList, hydrate } = require("./functions");
const code = "redmi";
const uncode = "r2dm3";

describe("Teste das funções encode e decode", () => {
  it("Testa se encode e decode são funções", () => {
    expect(typeof encode).toBe("function");
    expect(typeof decode).toBe("function");
  });
  it('Testa se a função encode substitui "a, e, i, o, u" por "1, 2, 3, 4, 5"', () => {
    expect(encode("aeiou")).toBe("12345");
  });
  it('Testa se a função decode substitui "1, 2, 3, 4, 5" por "a, e, i, o, u"', () => {
    expect(decode("12345")).toBe("aeiou");
  });
  it("Testa se outras letras e/ou números não são convertidos", () => {
    expect(encode("gp")).toBe("gp");
    expect(decode("890")).toBe("890");
  });
  it("Testa se as strings passadas e retornadas pela função tem o mesmo número de caracteres", () => {
    expect(encode(code).length).toBe(code.length);
    expect(decode(uncode).length).toBe(uncode.length);
  });
});
describe('Teste da função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

module.exports = techList;