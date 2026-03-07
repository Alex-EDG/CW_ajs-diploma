import Character from '../Character';

export default class Vampire extends Character {
  constructor(level, type = 'vampire') {
    super(level, type);
    this.attack = 25;
    this.defense = 25;
    this.distance = 2;
    this.attackRange = 2;
  };
};
