import { test, expect } from '@jest/globals';
import { Undead } from '../Characters/Undead';

test('Testing the `Undead` class', () => {
  const expected = {
    name: 'Player',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(new Undead('Player')).toEqual(expected);
});