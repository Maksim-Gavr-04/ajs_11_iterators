export class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('This character is already a member of the team!');
    }

    this.members.add(character);
  }

  addAll(...randomCharacters) {
    randomCharacters.forEach(character => this.members.add(character));
  }

  toArray() {
    return [ ...this.members ];
  }

  [Symbol.iterator]() {
    const members = this.toArray();
    let current = 0;
    return {
      next() {
        if (current === members.length) {
          return { value: undefined, done: true };
        }

        return { value: members[current++], done: false };
      }
    };
  }
}