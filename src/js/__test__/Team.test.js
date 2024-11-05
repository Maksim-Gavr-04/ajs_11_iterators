import { test, expect } from '@jest/globals';
import { Bowman } from '../Characters/Bowman';
import { Team } from '../Team';

test('Testing the `add()` method', () => {
  const character = new Bowman('Player');
  const team = new Team();
  team.add(character);

  const expected = new Set();
  expected.add(character);
  expect(team.members).toEqual(expected);
});

test('Testing the `add()` methodwith the same character, added twice', () => {
  expect(() => {
    const character = new Bowman('Player');
    const team = new Team();
    team.add(character);
    team.add(character);
  }).toThrow('This character is already a member of the team!');
});

test('Testing the `addAll()` method', () => {
  const characterA = new Bowman('PlayerA');
  const characterB = new Bowman('PlayerB');
  const team = new Team();
  team.addAll(characterA, characterB, characterA);

  const expected = new Set();
  expected.add(characterA);
  expected.add(characterB);

  expect(team.members).toEqual(expected);
});

test('Testing the `toArray()` method', () => {
  const characterA = new Bowman('PlayerA');
  const characterB = new Bowman('PlayerB');
  const characterC = new Bowman('PlayerC');
  const team = new Team();
  team.addAll(characterA, characterB, characterC);

  const expected = [
    characterA, characterB, characterC
  ];
  expect(team.toArray()).toEqual(expected);
});

test('Testing the `[Symbol.iterator]()` method at the start of the iteration process', () => {
  const characterA = new Bowman('PlayerA');
  const characterB = new Bowman('PlayerB');
  const team = new Team();
  team.addAll(characterA, characterB);

  function startOfIteration() {
    const iterator = team[Symbol.iterator]();
    return iterator.next();
  }

  const expected = {
    value: {
      name: 'PlayerA',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25
    },
    done: false
  };
  expect(startOfIteration()).toEqual(expected);
});

test('Testing the `[Symbol.iterator]()` method at the end of the iteration process', () => {
  const characterA = new Bowman('PlayerA');
  const characterB = new Bowman('PlayerB');
  const team = new Team();
  team.addAll(characterA, characterB);

  function endOfIteration() {
    const iterator = team[Symbol.iterator]();
    iterator.next();
    iterator.next();
    return iterator.next();
  }

  const expected = { value: undefined, done: true };
  expect(endOfIteration()).toEqual(expected);
});