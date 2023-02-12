import IPizza from "./pizza";
import { Sugar } from './pizzaFlavorTypes';

interface SugarPizza extends IPizza {
    flavor: Sugar;
    slices: 4;
}

export default SugarPizza;