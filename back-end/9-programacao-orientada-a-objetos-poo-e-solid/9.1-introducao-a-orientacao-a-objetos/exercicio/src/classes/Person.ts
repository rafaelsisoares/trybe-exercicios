export default class Person {
    private _name: string;
    private _birthDate: Date;

    constructor(name: string, birthDate: Date) {
        this._birthDate = birthDate;
        this._name = name;
    }

    get name(): string {
        return this._name;
    };

    set name(value: string) {
        if (value.length < 3) {
            throw new Error('Nome muito curto');
        }

        this._name = value;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    set birthDate(value: Date) {
        if (value.getTime() > new Date().getTime()) {
            throw new Error('A data de nascimento não pode ser uma data futura');
        }

        if (this.getAge(value) >= 120) {
            throw new Error('A pessoa deve ter no máximo 120 anos');
        }
    }

    getAge(value: Date): number {
        if (value.getMonth() >= new Date().getMonth()) {
            return (new Date().getFullYear() - value.getFullYear()) - 1;
        }
        return new Date().getFullYear() - value.getFullYear();
    }
}