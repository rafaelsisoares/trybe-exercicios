// Criação da classe Tv
class Tv {
    // Atributos da classe
    brand: string;
    size: number;
    resolution: string;
    connections: string[];
    connectedTo: string;

    // Método construtor que é inicializado na criação de uma instância
    constructor(brand: string, size: number, resolution: string, connections: string[]) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }

    // Métodos da classe
    turnOn() {
        console.log(`A TV ${this.brand} de ${this.size} polegadas, com resolução ${this.resolution}
        que tem as conexões: ${this.connections} está ligada`);
    }
}

// Criando uma instância da classe Tv
const tv = new Tv('Samsung Smart TV', 40, 'FullHD', ['HDMI', 'Ethernet', 'AV', 'Coaxial', 'USB', 'VGA']);

// Utilizando o método
tv.turnOn();