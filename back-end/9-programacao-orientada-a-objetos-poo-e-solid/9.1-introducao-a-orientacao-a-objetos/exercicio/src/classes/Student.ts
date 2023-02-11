import crypto from 'crypto';
import Person from './Person';

export default class Student extends Person {
    private _admission: string;
    private _exams: number[];
    private _works: number[];

    constructor(student: Person) {
        super(student.name, student.birthDate);
        this._admission = this.generateAdmission();
        this._exams = [];
        this._works = [];
    }

    get admission(): string {
        return this._admission;
    }

    get name(): string {
        return super.name;
    }

    set name(newValue: string) {
        if (newValue.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres');
        }
        super.name = newValue;
    }

    get exams(): number[] {
        return this._exams;
    }

    set exams(newValue: number[]) {
        if (newValue.length > 4) {
            throw new Error('O estudante só pode ter 4 notas');
        }

        this._exams = newValue;
    }

    get works(): number[] {
        return this._works;
    }

    set works(newValue: number[]) {
        if (newValue.length > 2) {
            throw new Error('O estudante só pode ter 2 notas');
        }

        this._works = newValue;
    }

    sumGrades(): string {
        const sumExams = this._exams.reduce((total, grade) => total + grade, 0);
        const sumWorks = this._works.reduce((total, grade) => total + grade, 0);
        return `A soma das notas das provas é: ${sumExams}
            A soma das notas dos trabalhos é ${sumWorks}`;
    }

    average(): string {
        const mediaExams = this._exams.reduce((total, grade) => total + grade, 0) / this._exams.length;
        const mediaWorks = this._works.reduce((total, grade) => total + grade, 0) / this._works.length;
        return `A média das notas das provas é: ${mediaExams}
            A média das notas dos trabalhos é ${mediaWorks}`;
    }

    generateAdmission(): string {
        return `${crypto.randomBytes(16)}`;
    }
}