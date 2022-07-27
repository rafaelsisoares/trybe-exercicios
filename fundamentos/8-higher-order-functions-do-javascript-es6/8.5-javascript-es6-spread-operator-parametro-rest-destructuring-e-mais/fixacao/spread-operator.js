// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Mamão', 'Maça', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Banana', 'Morango', 'Abacaxi'];

const fruitSalad = (fruit, additional) => {
    const allItems = [...fruit, ...additional];
    return allItems
};

console.log(fruitSalad(specialFruit, additionalItens));