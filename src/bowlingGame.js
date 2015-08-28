var BowlingGame = function() {
  this.frames = {};
};

BowlingGame.prototype.startGame = function (frame) {
  for(var i = 1; i < 11; i++) {
    this.frames['frame' + i ] = new BowlingFrame(i);
  };
};
