var BowlingFrame = function() {

  this.rolls = [];
  this.bonus = 0;
  this.score = 0;
  this.partialScore = 0;
  this.hdcp = 0;

};

BowlingFrame.prototype.addPartial = function () {
  if (this.rolls[0] === 10) {
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
  if (this.rolls.length === 2 || this.hasStrike()) {
    return true;
  }
  else {
    return false
  };
};

////////////////////////////

BowlingFrame.prototype.sumHdcp = function () {
  this.hdcp = this.partialScore + this.bonus
};
