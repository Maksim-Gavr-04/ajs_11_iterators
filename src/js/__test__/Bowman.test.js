import { test, expect } from '@jest/globals';
import { Bowman } from '../Characters/Bowman';

test('Testing the `Bowman` class', () => {
  const expected = {
    name: 'Player',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(new Bowman('Player')).toEqual(expected);
});