import { test, expect } from '@jest/globals';
import { Magician } from '../Characters/Magician';

test('Testing the `Magician` class', () => {
  const expected = {
    name: 'Player',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
    distance: 1
  };

  expect(new Magician('Player', 1)).toEqual(expected);
});

test('Testing the `Magician` class with a distance of 0', () => {
  const player = new Magician('Player', 0);
  const expected = 1;
  expect(player.distance).toBe(expected);
});