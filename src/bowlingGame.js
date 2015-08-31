var BowlingGame = function() {
  this.frames = {};
  this.currentFrame;
  this.previousFrame;
  this.counter = 1

};

BowlingGame.prototype.startGame = function () {
  for(var i = 1; i < 11; i++) {
    this.frames['frame' + i ] = new BowlingFrame(i);
  };
  this.currentFrame = this.frames.frame1;
};

BowlingGame.prototype.addRoll = function (roll) {

  if (roll > 10 || (roll > (10 - this.currentFrame.rolls[0]))) {
    throw 'invalid amount of pins';
  }
  else {
    this.currentFrame.rolls.push(roll);
    this.addSpareBonus();
    this.currentFrame.addPartial();
    this.currentFrame.sumHdcp();

    // this.previousFrame.sumHdcp();

    if ( this.currentFrame.isFull() || this.currentFrame.hasStrike()) {
      this.currentFrame = this.frames['frame' + (this.counter += 1)];
      this.previousFrame = this.frames['frame' + (this.counter - 1)];
      this.previousFrame.sumHdcp();
    };
    // this.previousFrame.sumHdcp();
  };
};

BowlingGame.prototype.addSpareBonus = function () {
  if (this.currentFrame != this.frames.frame1 && this.previousFrame.isFull() && this.previousFrame.hasSpare()) {
    this.previousFrame.bonus = this.currentFrame.rolls[0]
  };
};

// BowlingGame.prototype.addHdcp = function () {
//
//     this.currentFrame.hdcp = this.currentFrame.partialScore + this.currentFrame.bonus +
//
// };
