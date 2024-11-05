import { Character } from './Character';

export class MathCharacter extends Character {
  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    if (typeof value !== 'boolean') {
      throw new Error('The value must be either true or false!');
    }

    this._stoned = value;
  }

  get attackMath() {
    const dependenceOnDistance = (1 - (this.distance - 1) / 10);

    let result = this.attack * dependenceOnDistance;

    if (this.stoned) {
      result -= Math.log2(this.distance) * 5;
    }

    return Math.round(result);
  }
}