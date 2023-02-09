class Subject {
    private _admission: number;
    private _name: string;
    private _exams: number[];
    private _works: number[];

    constructor(admission: number, name: string, exams: number[], works: number[]) {
        this._admission = admission;
        this._name = name;
        this._exams = exams;
        this._works = works;
    }

    sumGrades() {
        const sumExams = this._exams.reduce((total, grade) => total + grade, 0);
        const sumWorks = this._works.reduce((total, grade) => total + grade, 0);
        return `A soma das notas das provas é: ${sumExams}
        A soma das notas dos trabalhos é ${sumWorks}`;
    }
}