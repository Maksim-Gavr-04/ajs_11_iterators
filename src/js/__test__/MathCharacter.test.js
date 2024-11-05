import { test, expect } from '@jest/globals';
import { Magician } from '../Characters/Magician';

test('Testing the `stoned` getter and setter with the incorrect value', () => {
  expect(() => {
    const player = new Magician('Player', 1);
    player.stoned = 'false';
  }).toThrow('The value must be either true or false!');
});

test('Testing the `stoned` getter and setter with the correct value', () => {
  const player = new Magician('Player', 1);
  player.stoned = true;
  expect(player.stoned).toBe(true);
});

test('Testing the `attack` getter, if `stoned` is false', () => {
  const distance = 4;
  const player = new Magician('Player', distance);

  const dependenceOnDistance = (1 - (distance - 1) / 10);
  const expected = Math.round(player.attack * dependenceOnDistance);
  expect(player.attackMath).toBe(expected);
});

test('Testing the `attack` getter, if `stoned` is true', () => {
  const distance = 8;
  const player = new Magician('Player', distance);
  player.stoned = true;

  const dependenceOnDistance = (1 - (distance - 1) / 10);
  const expected = Math.round(
    player.attack * dependenceOnDistance - Math.log2(distance) * 5
  );
  expect(player.attackMath).toBe(expected);
});