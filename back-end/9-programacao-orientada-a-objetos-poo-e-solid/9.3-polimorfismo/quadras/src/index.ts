import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const clube = new Clube();
const quadraFutebol = new QuadraFutebol();
const quadraTenis = new QuadraTenis();

clube.adicionarQuadra(quadraFutebol);
clube.adicionarQuadra(quadraTenis);

console.log(quadraFutebol.reservar(new Date('2023-03-01')));
console.log(quadraTenis.reservar(new Date('2023-03-10')));