abstract class Character {
    abstract talk(): void;
    abstract specialMove(): void;

    static showCharacter(character: Character): void {
        character.talk();
        character.specialMove();
    }
}

class MeleeCharacter extends Character {
    constructor(private _name: string, private _specialMoveName: string) {
        super();
    }
    talk(): void {
        console.log(`Hi I'm ${this._name}. I attack at close range`);
    }

    specialMove(): void {
        console.log(`${this._name} used ${this._specialMoveName}`);
    }
}

class LongRangeCharacter extends Character {
    constructor(private _name: string, private _specialMoveName: string) {
        super();
    }

    talk(): void {
        console.log(`Hi I'm ${this._name}. I attack at long range`);
    }

    specialMove(): void {
        console.log(`${this._name} used ${this._specialMoveName}`);
    }
}

const yoshi = new MeleeCharacter('Yoshi', 'Super Dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

/* yoshi.talk();
yoshi.specialMove();
samus.talk();
samus.specialMove(); */
Character.showCharacter(yoshi);
Character.showCharacter(samus);