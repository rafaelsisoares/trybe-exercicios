class Tv {
    brand: string;
    size: number;
    resolution: string;
    connections: string[];
    connectedTo: string;

    constructor(brand: string, size: number, resolution: string, connections: string[]) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }

    turnOn() {
        console.log(`A TV ${this.brand} de ${this.size} polegadas, com resolução ${this.resolution}
        que tem as conexões: ${this.connections} está ligada`);
    }
}

const tv = new Tv('Samsung Smart TV', 40, 'FullHD', ['HDMI', 'Ethernet', 'AV', 'Coaxial', 'USB', 'VGA']);

tv.turnOn();