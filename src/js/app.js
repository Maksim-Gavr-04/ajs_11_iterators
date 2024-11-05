import { Team } from './Team';
import { Bowman } from './Characters/Bowman';
import { Swordsman } from './Characters/Swordsman';
import { Magician } from './Characters/Magician';

// TODO: write code here
const team = new Team();
const bowman = new Bowman('player1');
const swordsman = new Swordsman('player2');
const mg = new Magician('player3', 2);

team.addAll(bowman, swordsman, mg);

for (const player of team) {
  if (!player.distance) {
    console.log(
      `Name: ${player.name}, type: ${player.type}, ` +
      `health: ${player.health}, level: ${player.level}.`
    );
  } else {
    console.log(
      `Name: ${player.name}, type: ${player.type}, ` +
      `health: ${player.health}, level: ${player.level}, distance: ${player.distance}`
    );
  }
}

console.log('app worked!');