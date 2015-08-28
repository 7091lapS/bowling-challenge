var BowlingFrame = function() {

  this.rolls = [];
  this.bonus = 0;
  this.score = 0;
  this.partialScore = 0;

}

BowlingFrame.prototype.addRoll = function (roll) {
  if (this.rolls[0] == 10) {
    this.rolls.push(0);
    throw 'you have already knocked all the pins';
  };
  this.rolls.push(roll);
};

BowlingFrame.prototype.addPartial = function (rolls) {
  this.partialScore = (this.rolls[0] + this.rolls[1]);
};

BowlingFrame.prototype.addUpScore = function (partial, bonus) {
  this.score = partial + this.bonus;
};

BowlingFrame.prototype.isStrike = function(roll) {
  if (this.rolls[0] == 10) {
    return true;
  };
};
