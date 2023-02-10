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
}