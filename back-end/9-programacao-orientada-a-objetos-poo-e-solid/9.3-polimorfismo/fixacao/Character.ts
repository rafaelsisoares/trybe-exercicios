interface Character {
    name: string;
    specialMove: string;
  }
  
  interface DbCharacter extends Character {
    id: number;
  }
  
  const db: DbCharacter[] = [];

interface IModel {
    insert(character: Character): DbCharacter;
    getAll(): DbCharacter[];
    getById(id: number): DbCharacter;
    update(id: number, character: Character): DbCharacter;
    remove(id: number): boolean;
}

class LocalDBModel implements IModel {
    insert(character: Character) {
        const lastId = db[db.length - 1].id;
        const newCharacter = { id: lastId + 1, ...character };
        db.push(newCharacter);
        return newCharacter;
    }
    
    getAll() {
        return db;
    }

    getById(targetId: number) {
        const character = db.find(({id}) => id === targetId);
        if (!character) throw new Error('Personagem não encontrado');

        return character;
    }

    update(id: number, character: Character) {
        const index = db.findIndex((character) => character.id === id);
        if (!character) throw new Error('Personagem não encontrado');

        const editedCharacter = { id: db[index].id, ...character };
        db[index] = editedCharacter;
    }

    remove(id: number) {
        const index = db.findIndex((character) => character.id === id);
        if (index < 0) return false;

        db.splice(index, 1);
        return true;
    }
}

class CharacterService {
    constructor(readonly db: LocalDBModel) {}

    insert(character: Character) {
        const newCharacter = this.db.insert(character);
        return { status: 201, data: newCharacter };
    }

    getAll() {
        const characters = this.db.getAll();
        return { status: 200, data: characters };
    }

    getById(id: number) {
        try {
            const character = this.db.getById(id);
            return { status: 200, data: character };
        } catch (error) {
            return { status: 404, data: error.message };
        }
    }

    update(id: number, character: Character) {
        try {
            const editedCharacter = this.db.update(id, character);
            return { status: 200, data: editedCharacter };
        } catch (error) {
            return { status: 404, data: error.message };
        }
    }

    remove(id: number) {
        const isRemoved = this.db.remove(id);
        if (!isRemoved) return { status: 404, data: 'Personagem não encontrado' };

        return { status: 204, data: '' };
    }
}

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