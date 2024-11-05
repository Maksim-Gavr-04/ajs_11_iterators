import { test, expect } from '@jest/globals';
import { Daemon } from '../Characters/Daemon';

test('Testing the `Daemon` class', () => {
  const expected = {
    name: 'Player',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
    distance: 1
  };

  expect(new Daemon('Player', 1)).toEqual(expected);
});

test('Testing the `Daemon` class with with a distance of 0', () => {
  const player = new Daemon('Player', 0);
  const expected = 1;
  expect(player.distance).toBe(expected);
});