export default class Data {
    private _year: number;
    private _month: number;
    private _day: number;

    constructor(year: number, month: number, day: number) {
        const date = `${year}-${month}-${day}`;

        if (new Date(date).getDate() !== day) {
            this._day = 1,
            this._month = 1,
            this._year = 1900
        } else {
            this._day = day,
            this._month = month,
            this._year = year
        }
    }

    get day(): number {
        return this._day;
    }

    set day(day: number) {
        this._day = day;
    }

    get month(): number {
        return this._month;
    }

    set month(month: number) {
        this._month = month;
    }

    get year(): number {
        return this._year;
    }

    set year(year: number) {
        this._year = year;
    }

    getMonthName(): string {
        const monthNames = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ]

    return monthNames[this.month - 1]
    }

    isLeapYear(): boolean {
        return this.year % 4 === 0;
    }

    compare(date: Data): number {
        const currentDate = `${this.year}-${this.month}-${this.day}`;
        const paramDate = `${date.year}-${date.month}-${date.day}`;

        if (new Date(currentDate) > new Date(paramDate)) return 1;
        if (new Date(currentDate) < new Date(paramDate)) return -1;

        return 0;
    }

    format(formatting: string): string {
        const conditions: boolean[] = [
            (!formatting.match(/a{2,4}/g)),
            (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)),
            (!formatting.match(/d{2}/g))
        ];

        if (conditions.every((condition) => condition)) {
            throw new Error(`O formato passado é inválido ${formatting}`);
        }

        const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
        const month = this.month > 9 ? this.month.toString() : `0${this.month.toString()}`;
        const year = this.year.toString();

        const dateFormatted = formatting
        .replace('dd', day).replace('mm', month)
        .replace('M', this.getMonthName()).replace('aaaa', year)
        .replace('aa', year.substring(-2));

        return dateFormatted;
    }
}