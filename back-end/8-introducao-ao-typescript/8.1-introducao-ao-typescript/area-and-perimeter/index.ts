// ./index.ts

import * as Ex from './areaAndPerimeter';

console.log("A ÁREA DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getSquareArea(10)}cm²`);
console.log(`- Quadrado de lado 5cm: ${Ex.getSquareArea(5)}cm²`);
console.log(`- Quadrado de lado 100cm: ${Ex.getSquareArea(100)}cm²`);

console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getRectangleArea(10, 25)}cm²`);
console.log(`- Retângulo de base 5cm e altura 30cm: ${Ex.getRectangleArea(5, 30)}cm²`);
console.log(`- Retângulo de base 200cm e altura 100cm: ${Ex.getRectangleArea(200, 100)}cm²`);

console.log(`- Triângulo de base 10cm e altura 25cm: ${Ex.getTriangleArea(10, 25)}cm²`);
console.log(`- Triângulo de base 5cm e altura 30cm: ${Ex.getTriangleArea(5, 30)}cm²`);
console.log(`- Triângulo de base 100cm e altura 200cm: ${Ex.getTriangleArea(100, 200)}cm²`);

console.log("\nO PERÍMETRO DE UM:");

console.log(`- Quadrado de lado 10cm: ${Ex.getPolygonPerimeter([10, 10, 10, 10])}cm`);
console.log(`- Retângulo de base 10cm e altura 25cm: ${Ex.getPolygonPerimeter([10, 25, 10, 25])}cm`);
console.log(`- Triângulo cujos lados tem 10cm cada: ${Ex.getPolygonPerimeter([10, 10, 10])}cm`);

console.log("\nVERIFICA A EXISTÊNCIA DE TRIÂNGULOS CUJOS LADOS TÊM:");

console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 3)}`);
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(10, 5, 8)}`);
console.log(`- 10cm, 5cm e 3cm: ${Ex.triangleCheck(30, 30, 30)}`);

console.log('A AREA DE UM LOSANGO DE');

console.log(`- 32cm e 18cm: ${Ex.getLosangeArea(32, 18)}`);
console.log(`- 200cm e 50cm: ${Ex.getLosangeArea(200, 50)}`);
console.log(`- 75cm e 25cm: ${Ex.getLosangeArea(75, 25)}`);

console.log('A AREA DE UM TRAPEZIO DE');

console.log(`- 100cm, 70cm e 50cm: ${Ex.getTrapezoidArea(100, 70, 50)}`);
console.log(`- 75cm, 50cm e 35cm: ${Ex.getTrapezoidArea(75, 50, 35)}`);
console.log(`- 150cm, 120cm e 80cm: ${Ex.getTrapezoidArea(150, 120, 80)}`);

console.log('A AREA DE UM CIRCULO COM RAIO');

console.log(`- 25cm: ${Ex.getCircleArea(25)}`);
console.log(`- 100cm: ${Ex.getCircleArea(100)}`);
console.log(`- 12,5cm: ${Ex.getCircleArea(12.5)}`);