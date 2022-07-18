const {sum, myRemove, myFizzBuzz} = require('./sum');

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

describe('Testes da função myRemove', () => {
    it('Testa se a função retorna o array sem o 3', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
    it('Testa se ao passar um item que não está presente no array, retorne o array original', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})

describe('Testes da função myFizzBuzz', () => {
    test('Testa se a função retorna "fizzbuzz" se receber um numero divisivel por 3 e 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })
    test('Testa se a função retorna "fizz" se receber um numero divisivel por 3', () => {
        expect(myFizzBuzz(21)).toBe('fizz');
    })
    test('Testa se a função retorna "buzz" se receber um numero divisivel por 5', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    })
    test('Testa se a função retorna o proprio numero se receber um numero que não é divisivel por 3 ou 5', () => {
        expect(myFizzBuzz(4)).toBe(4);
    })
    test('Testa se a função retorna "false" se não receber um numero', () => {
        expect(myFizzBuzz('10')).toBe(false);
    })
})