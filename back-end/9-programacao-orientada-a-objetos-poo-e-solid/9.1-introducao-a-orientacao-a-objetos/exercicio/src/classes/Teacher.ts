import crypto from 'crypto';

import Person from "./Person";
import IEmployee from "../interfaces/Employee";
import Subject from "./Subject";

export default class Teacher extends Person implements IEmployee {
    private _registration: string;
    private _subject: Subject;
    private _salary: number;
    private _admissionDate: Date;

    constructor(person: Person, salary: number, subject: Subject) {
        super(person.name, person.birthDate);
        this._subject = subject;
        this._salary = salary;
        this._registration = this.generateRegistration();
        this._admissionDate = new Date();
    }

    get registration(): string {
        return this._registration;
    }

    get name(): string {
        return super.name;
    }

    set name(value: string) {
        super.name = value;
    }

    get birthDate(): Date {
        return super.birthDate;
    }

    set birthDate(value: Date) {
        super.birthDate = value;
    }

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        if (value < 0) {
            throw new Error('O salário não pode ser negativo');
        }
        this._salary = value;
    }

    get admissionDate(): Date {
        return this._admissionDate;
    }

    set admissionDate(value: Date) {
        if (value.getTime() > new Date().getTime()) {
            throw new Error('A data de adimissão não pode ser uma data futura');
        }

        this._admissionDate = value;
    }

    get subject(): Subject {
        return this._subject;
    }

    set subject(subject: Subject) {
        this._subject = subject;
    }

    generateRegistration(): string {
        return crypto.randomBytes(16).toString('hex');
    }
}