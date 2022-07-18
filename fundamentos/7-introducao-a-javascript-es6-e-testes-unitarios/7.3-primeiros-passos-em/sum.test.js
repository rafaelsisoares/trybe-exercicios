const sum = require('./sum');

describe('Testes da função sum', () => {
    it('Testa se ao receber os parâmetros 4 e 5, a função retorna 9', () => {
        expect(sum(4, 5)).toBe(9);
    })
    it('Testa se ao receber os parâmetros 0 e 0, a função retorna 0', () => {
        expect(sum(0, 0)).toBe(0);
    })
    test('Testa se a função retorna um erro caso receba uma string como parâmetro', () => {
        expect(() => sum(4, '5')).toThrow('parameters must be number');
    })
});