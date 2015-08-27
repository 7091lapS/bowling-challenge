var BowlingFrame = function() {
  this.rolls = [];
  this.bonus = 0;
  this.score = 0;

}

BowlingFrame.prototype.addRoll = function (roll) {
  if (this.rolls[0] === 10) {
    throw 'you have already knocked all the pins';
  };
  this.rolls.push(roll);
};

BowlingFrame.prototype.addUpScore = function (rolls, bonus) {
  this.score = (this.rolls[0] + this.rolls[1]) + this.bonus;
};
