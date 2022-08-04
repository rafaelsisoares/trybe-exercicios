const { exportAllDeclaration } = require('@babel/types');
const uppercase = require('./exercise7');

describe('Testes da função uppercase', () =>{
    it('Testa se a função transforma qualquer letra para maiúscula', (done) => {
        setTimeout(() => {
            const specialLetters = ['ç', 'á', 'õ', 'ê', 'à'];
        const specialLetter = specialLetters[Math.floor(Math.random() * specialLetters.length)];
        uppercase('a', (string) => {
            try {
                expect(string).toBe('a'.toUpperCase());
                done();
            }
            catch (error) {
                done(error)
            }
        })
        uppercase(specialLetter, (string) => {
            try {
                expect(string).toBe(specialLetter.toUpperCase());
                done();
            }
            catch (error) {
                done(error);
            }
        })
        }, 500);
        
    })
})