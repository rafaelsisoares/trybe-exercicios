class Superclass {
    public isSuper: boolean
    constructor() {
        this.isSuper = true;
    }

    public sayHello() {
        return "Hello World!";
    }
};

class Subclass extends Superclass {
    constructor() {
        super()
    }
};

const myFunc = (obj: Superclass): string => {
    return obj.sayHello();
}

const superObj = new Superclass();
const subObj = new Subclass();

console.log(myFunc(superObj));
console.log(myFunc(subObj));

