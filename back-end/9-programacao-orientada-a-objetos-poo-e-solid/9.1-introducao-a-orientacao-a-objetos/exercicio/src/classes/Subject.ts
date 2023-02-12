export default class Subject {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value.length < 3) {
            throw new Error('O nome da matéria deve ter no mínino 3 caracteres');
        }

        this._name = value;
    }
}