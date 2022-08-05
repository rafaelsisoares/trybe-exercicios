// Testes para as funções do exercício 8

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercise8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectError = new Error("Não temos esse pokémon para você :(");
    function callback(fail, success) {
        if (fail) {
            expect(fail).toStrictEqual(expectError);
            done();
        }
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Fearow', callback)
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectOutput = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';
    function callback(fail, success) {
        if(success) {
            expect(success).toEqual(expectOutput);
            done();
        }
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', callback);
  });
});
