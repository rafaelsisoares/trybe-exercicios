import Car from './car';
import IPizza from './pizza';
import newFilter from './newFilter';
import CommonPizza from './pizzaCommon';
import VegetarianPizza from './pizzaVegetarian';
import SugarPizza from './pizzaSugar';

const numArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const gol = new Car('Volkswagen', 'Prata', 4);

gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn('esquerda');
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedUp();
gol.speedDown();
gol.stop();

// O motorista aguarda o passageiro entrar no carro

gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.speedUp();
gol.speedDown();
gol.turn('esquerda');
gol.speedUp();
gol.speedDown();
gol.turn('direita');
gol.stop();

const pizza: IPizza = {
    flavor: 'Calabresa',
    slices: 8
}

console.log(pizza);


const newPizza: IPizza = {
    flavor: 'Marguerita',
    slices: 6,
}

console.log(newPizza);


const chocolatePizza: IPizza = {
    flavor: 'Nuttela',
    slices: 4,
}

console.log(chocolatePizza);


const commonPizza: CommonPizza = {
    flavor: 'Calabresa',
    slices: 8,
}

console.log(commonPizza);


const commonPizza2: CommonPizza = {
    flavor: 'Pepperoni',
    slices: 4,
}

console.log(commonPizza2);

const commonPizza3: CommonPizza = {
    flavor: 'Frango',
    slices: 6,
};

console.log(commonPizza3);

const vegetarianPizza: VegetarianPizza = {
    flavor: 'Cogumelo',
    slices: 6,
}

console.log(vegetarianPizza);

const vegetarianPizza2: VegetarianPizza = {
    flavor: 'Palmito',
    slices: 8,
}

console.log(vegetarianPizza2);

const sugarPizza: SugarPizza = {
    flavor: 'Nutella',
    slices: 4,
}

console.log(sugarPizza);



const itsPair = (num: number): boolean => num % 2 === 0;

console.log(newFilter<number>(numArr, itsPair));