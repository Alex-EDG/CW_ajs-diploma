import { generateTeam, characterGenerator } from '../generators';
import Bowman from '../characters/Bowman';
import Magician from '../characters/Magician';
import Swordsman from '../characters/Swordsman';

test('Функция-генератор characterGenerator выдаёт бесконечно новые персонажи из списка allowedTypes', () => {
  const countIterations = 15;

  const characters = [];
  const playerTypes = [Bowman, Swordsman, Magician];
  const generator = characterGenerator(playerTypes, 4);
  for (let i = 0; i < countIterations; i++) {
    characters.push(generator.next().value);
  };
  expect(characters.length).toBe(countIterations);
});

test('Функция generateTeam создает корректное количество персонажей в команде с уровнем не более maxLevel', () => {
  const characterCount = 5;
  const maxLevel = 4;

  const playerTypes = [Bowman, Swordsman, Magician];
  const playerTeam = generateTeam(playerTypes, maxLevel, characterCount);

  const team = playerTeam.filter(item => item.level <= maxLevel && item.level >= 1);

  expect(playerTeam.length).toBe(characterCount);
  expect(playerTeam.length).toBe(team.length);
});
