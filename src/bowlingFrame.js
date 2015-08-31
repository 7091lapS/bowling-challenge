var BowlingFrame = function() {

  this.rolls = [];
  this.bonus = 0;
  this.score = 0;
  this.partialScore = 0;

};

BowlingFrame.prototype.addPartial = function (rolls) {
  if (this.hasStrike) {
    this.partialScore = 10;
  }
  else {
    this.partialScore = (this.rolls[0] + this.rolls[1]);
  };
};

BowlingFrame.prototype.addUpScore = function (partial, bonus) {
  this.score = partial + this.bonus;
};

BowlingFrame.prototype.hasStrike = function() {
  if (this.rolls[0] === 10) {
    return true;
  }
  else {
    return false;
  };
};

BowlingFrame.prototype.hasSpare = function() {
  if (this.partialScore === 10 && this.rolls[0] != 10) {
    return true;
  }
  else {
    return false;
  };

};

// I'll have to change this for frame 10
BowlingFrame.prototype.isFull = function () {
  if (this.rolls.length === 2) {
    return true;
  }
  else {
    return false
  };
};
