/* eslint-disable no-underscore-dangle */
export default class СalculationOfAttack {
// class calculationOfAttack {
  constructor(name, type, x) {
    this.name = name;
    this.type = type;
    this.x = x;
    this.health = 100;
    this.level = 1;
  }

  set stoned(stoned) {
    this._stoned = stoned;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(attack) {
    if (this.stoned) {
      this._attack = attack - Math.log2(this.x) * 5;
    } else {
      this._attack = attack - (attack * 0.1) * (this.x - 1);
    }

    if (this._attack > 100) {
      this._attack = 100;
    }

    if (this._attack < 0) {
      this._attack = 0;
    }
  }

  get attack() {
    return this._attack;
  }
}
