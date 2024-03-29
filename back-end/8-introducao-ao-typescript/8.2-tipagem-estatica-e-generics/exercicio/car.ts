class Car {
    brand: string;
    color: string;
    doors: number;

    constructor(brand: string, color: string, doors: number) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }

    honk(): void {
        console.log('BEEP BEEP!');
    }

    turnOn(): void {
        console.log('Carro ligado');
    }

    turnOff(): void {
        console.log('Carro desligado');
        
    }

    speedUp(): void {
        console.log('Acelerando');
        
    }

    speedDown(): void {
        console.log('Reduzindo a velocidade');
        
    }

    stop(): void {
        console.log('Carro parado');
        
    }

    turn(direction: string): void {
        console.log(`Virando para a ${direction}`);
        
    }
}

export default Car;