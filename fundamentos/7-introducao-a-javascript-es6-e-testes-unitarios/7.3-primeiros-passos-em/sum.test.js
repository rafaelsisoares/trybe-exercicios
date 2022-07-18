const sum = require('./sum');

describe('Testes da função sum', () => {
    it('Testa se ao receber os parâmetros 4 e 5, a função retorna 9', () => {
        expect(sum(4, 5)).toBe(9);
    })
});