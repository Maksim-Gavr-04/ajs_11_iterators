import { test, expect } from '@jest/globals';
import { Character } from '../Character';
import { Bowman } from '../Characters/Bowman';

test('Testing the `Character` class without a string name', () => {
  expect(() => {
    new Character(10, 'Bowman');
  }).toThrow('The character\'s name should be a string and contain from 2 to 10 symbols!');
});

test('Testing the `Character` class with one symbol in the name', () => {
  expect(() => {
    new Character('A', 'Bowman');
  }).toThrow('The character\'s name should be a string and contain from 2 to 10 symbols!');
});

test('Testing the `Character` class with ten symbols in the name', () => {
  expect(() => {
    new Character('Aaaaaaaaaaa', 'Bowman');
  }).toThrow('The character\'s name should be a string and contain from 2 to 10 symbols!');
});

test('Testing the `Character` class with the incorrect type', () => {
  expect(() => {
    new Character('Player', 'Superman');
  }).toThrow('Such character does not exist!');
});

test('Testing the `Character` class with the correct type', () => {
  const expected = {
    name: 'Player',
    type: 'Bowman',
    health: 100,
    level: 1,
  };

  expect(new Character('Player', 'Bowman')).toEqual(expected);
});

test('Testing the `levelUp()` method with a health of 0', () => {
  expect(() => {
    const player = new Bowman('Player', 'Bowman');
    player.health = 0;
    player.levelUp();
  }).toThrow('If the health level is 0, it is not possible to increase the level!');
});

test('Testing the `levelUp()` method with positive health', () => {
  const player = new Bowman('Player');
  player.levelUp();

  const expected = {
    name: 'Player',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  expect(player).toEqual(expected);
});

test('Testing the `damage()` method with a health of 0', () => {
  expect(() => {
    const player = new Bowman('Player', 'Bowman');
    player.health = 0;
    player.damage(40);
  }).toThrow('To cause damage, health must be positive!');
});

test('Testing the `damage()` method with positive health', () => {
  const player = new Bowman('Player');
  player.damage(40); // <<< valueOfDamage = 30

  const expected = 70;
  expect(player.health).toEqual(expected);
});

test('Testing the `damage()` method with positive health and `valueOfDamage` that exceeds the current health', () => {
  const player = new Bowman('Player');
  player.damage(150); // <<< valueOfDamage = 112.5

  const expected = 0;
  expect(player.health).toEqual(expected);
});