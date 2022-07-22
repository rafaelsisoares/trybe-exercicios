const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.round((Math.random() * dragon.strength) + 15);

const warriorDamage = () => Math.round((Math.random() * (warrior.strength * warrior.weaponDmg) + warrior.strength));

const mageDamage = () => ({
    damage: Math.round((Math.random() * (mage.intelligence * 2) + mage.intelligence)),
    mana: () => (mage.mana >= 15) ? mage.mana -= 15 : mage.damage = 'Não possui mana suficiente',
});

const gameActions = {
    warrior: (callback) => {
        warrior.damage = callback();
        dragon.healthPoints -= warrior.damage;
    },

    mage: (callback) => {
        mage.damage = callback().damage;
        mage.mana = callback().mana();
        dragon.healthPoints -= mage.damage;

    },

    dragon: (callback) => {
        dragon.damage = callback();
        mage.healthPoints -= dragon.damage;
        warrior.healthPoints -= dragon.damage;
    },

    members: () => battleMembers,
};

gameActions.warrior(warriorDamage);
gameActions.mage(mageDamage);
gameActions.dragon(dragonDamage);
console.log(mage, warrior, dragon);

