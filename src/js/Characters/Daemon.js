import { MathCharacter } from '../MathCharacter';

export class Daemon extends MathCharacter {
  constructor(name, distance) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
    if (distance <= 0) {
      this.distance = 1;
    } else {
      this.distance = distance;
    }
  }
}