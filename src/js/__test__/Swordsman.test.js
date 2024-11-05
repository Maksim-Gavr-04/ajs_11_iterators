import { test, expect } from '@jest/globals';
import { Swordsman } from '../Characters/Swordsman';

test('Testing the `Swordsman` class', () => {
  const expected = {
    name: 'Player',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(new Swordsman('Player')).toEqual(expected);
});