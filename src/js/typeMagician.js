import СalculationOfAttack from './app';

export default class Magician extends СalculationOfAttack {
  constructor(name, type, x) {
    super(name, type, x);
    this.attack = 10;
    this.defence = 40;
  }
}
