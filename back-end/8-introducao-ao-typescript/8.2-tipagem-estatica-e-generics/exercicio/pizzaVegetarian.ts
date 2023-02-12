import IPizza from "./pizza";
import { Vegetarian } from './pizzaFlavorTypes';

interface VegetarianPizza extends IPizza {
    flavor: Vegetarian;
}

export default VegetarianPizza;