import crypto from 'crypto';

export default class Subject {
    private _admission: string;
    private _name: string;
    private _exams: number[];
    private _works: number[];

    constructor(name: string) {
        this._admission = crypto.randomUUID();
        this._name = name;
        this._exams = [];
        this._works = [];
    }

    get name(): string {
        return this._name;
    }

    set name(newValue: string) {
        if (newValue.length < 3) {
            throw new Error('O nome deve conter no mínimo 3 caracteres');
        }
        this._name = newValue;
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
}