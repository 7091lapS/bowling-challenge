var BowlingGame = function() {
  this.frames = {};
  this.currentFrame;
  this.counter = 1

};

BowlingGame.prototype.startGame = function (frame) {
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
    this.currentFrame.rolls.push(roll)
    if ( this.currentFrame.isFull() || this.currentFrame.hasStrike()) {
      this.currentFrame = this.frames['frame' + (this.counter += 1)];
    };
  };
};
