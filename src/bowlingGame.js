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

  // var arr = [];
  // Object.keys(this.frames).forEach(function (key) { arr.push(key) });
  //now basically i have an array of frame names
};

BowlingGame.prototype.addRoll = function (roll) {



//the error check for the second roll doesnt work, fix

    if (roll > 10 || (roll > (10 - roll[0]))) {
      throw 'invalid amount of pins';
    }
    else {
      this.currentFrame.rolls.push(roll);  //this stuff doesnt work
      if (this.currentFrame.hasStrike === true || this.currentFrame.isFull === true) {
        this.currentFrame = this.frames['frame' + (this.counter += 1) ];
      };
    };


};
