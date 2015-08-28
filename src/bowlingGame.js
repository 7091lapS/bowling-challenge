var BowlingGame = function() {
  this.frames = {};
};

BowlingGame.prototype.startGame = function (frame) {
  for(var i = 0; i < 10; i++) {
    this.frames['frame' + i ] = new BowlingFrame(i);
  }
};
