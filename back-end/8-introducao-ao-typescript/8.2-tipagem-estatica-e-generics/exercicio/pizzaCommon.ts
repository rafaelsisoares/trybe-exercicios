import IPizza from "./pizza";
import { Common } from './pizzaFlavorTypes';

interface CommonPizza extends IPizza {
    flavor: Common;
}

export default CommonPizza;