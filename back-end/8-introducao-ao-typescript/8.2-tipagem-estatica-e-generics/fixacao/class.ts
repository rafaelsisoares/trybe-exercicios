class Dog {
    name: string;
    specie: string;

    constructor(name: string, specie: string) {
        this.name = name;
        this.specie = specie;
    }

    whatSpecie(): string {
        return `${this.name} pertence a espécie ${this.specie}`;
    }

    woof(): string {
        return `${this.name} está latindo!`;
    }
}