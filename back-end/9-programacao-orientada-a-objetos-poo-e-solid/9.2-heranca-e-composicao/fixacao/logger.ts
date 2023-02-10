interface Logger {
    log(str: string): void;
}

interface Database {
    print: Logger;
    save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
    log(str: string): void {
        console.log(`1. ${str}`);
    }
}

class ConsoleLogger2 implements Logger {
    log(str: string): void {
        console.log(`2. ${str}`);
    }
}

class ExampleDatabase implements Database {
    constructor(public print: Logger = new ConsoleLogger()) {}

    save(key: string, value: string): void {
        this.print.log(key);
        this.print.log(value);
    }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const db1 = new ExampleDatabase(logger1);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();

db1.save('key 1', 'value 1');
db2.save('key 2', 'value 2');
db3.save('key 3', 'value 3');