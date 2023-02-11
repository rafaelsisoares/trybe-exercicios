// Criação da classe Tv
class Tv {
    // Atributos da classe
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string[];
    private _connectedTo?: string;

    // Método construtor que é inicializado na criação de uma instância
    constructor(brand: string, size: number, resolution: string, connections: string[]) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }

    // Método getter
    get connectionGetter(): string | undefined {
        return this._connectedTo;
    }

    // Método setter
    set connectionSetter(connection: string | undefined) {
        if (!connection || this._connections.some((c) => c === connection)) {
            this._connectedTo = connection;
            console.log(this._connectedTo);
        } else {
            console.log('Sorry, connection unavailable');
        }
        ;
    }

    // Métodos da classe
    turnOn() {
        console.log(`A TV ${this._brand} de ${this._size} polegadas, com resolução ${this._resolution}
        que tem as conexões: ${this._connections} está ligada`);
    }
}

// Criando uma instância da classe Tv
const tv = new Tv('Samsung Smart TV', 40, 'FullHD', ['HDMI', 'Ethernet', 'AV', 'Coaxial', 'USB', 'VGA']);

// Utilizando o método
tv.turnOn();