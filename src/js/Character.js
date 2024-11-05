export class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('The character\'s name should be a string and contain from 2 to 10 symbols!');
    }
    if ([
      'Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'
    ].includes(type) !== true) {
      throw new Error('Such character does not exist!');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('If the health level is 0, it is not possible to increase the level!');
    }

    this.health = 100;
    this.level += 1;
    this.attack += this.attack * 20 / 100;
    this.defence += this.defence * 20 / 100;
  }

  damage(points) {
    if (this.health === 0) throw new Error('To cause damage, health must be positive!');

    const valueOfDamage = points * (1 - this.defence / 100);
    if (valueOfDamage > this.health) {
      this.health = 0;
    } else {
      this.health -= valueOfDamage;
    }
  }
}