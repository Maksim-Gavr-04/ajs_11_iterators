import { test, expect } from '@jest/globals';
import { Zombie } from '../Characters/Zombie';

test('Testing the `Zombie` class', () => {
  const expected = {
    name: 'Player',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(new Zombie('Player')).toEqual(expected);
});