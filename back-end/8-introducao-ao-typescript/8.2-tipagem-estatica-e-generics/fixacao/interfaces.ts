interface Car {
    brand: string;
    model: string;
    releaseYear: number;
    phrase(): string;
}

interface Feline {
    name: string;
    specie: string;
    isWild: boolean;
    phrase(): string;
}

interface Aircraft {
    model: string;
    manufacturer: string;
    capacity: number;
}