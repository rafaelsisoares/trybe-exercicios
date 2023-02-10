// Criação da classe mãe
class Superclass {
    public isSuper: boolean
    constructor() {
        this.isSuper = true;
    }

    public sayHello() {
        return "Hello World!";
    }
};

// Criação da classe filha
class Subclass extends Superclass {
    constructor() {
        super()
    }
};

// Função que recebe uma instância da classe mãe
const myFunc = (obj: Superclass): string => {
    return obj.sayHello();
}

const superObj = new Superclass(); // Instância da classe mãe
const subObj = new Subclass(); // Instância da classe filha

console.log(myFunc(superObj));
console.log(myFunc(subObj));

