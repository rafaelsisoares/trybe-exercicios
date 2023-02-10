interface MyInterface {
    myNumber: number;
    myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
    constructor(public myNumber: number) {}

    myFunc(myParam: number): string {
        return `${this.myNumber} + ${myParam} = ${this.myNumber + myParam}`;
    }
}

const myObj = new MyClass(7);

console.log(myObj.myFunc(10));
