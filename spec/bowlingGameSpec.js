describe('Bowling Game', function() {

    var game = new BowlingGame();

  beforeEach(function() {
    game.startGame(BowlingFrame);
  });


  it('has a frames object which will contain the bowling frames', function() {
    expect(game.frames).toBeDefined();
  });

  it('makes the frames when created', function () {
    expect(Object.keys(game.frames).length).toEqual(10);
  });

  it('sets the current frame to frame1 when created', function () {
    expect(game.currentFrame).toEqual(game.frames.frame1);
  });

  it('can add rolls to the current frame', function() {
    game.addRoll(9);
    expect(game.currentFrame.rolls[0]).toEqual(9);
  });

  it('throws an error if invalid roll', function() {
    expect(function() { game.addRoll(11) }).toThrow('invalid amount of pins');
  });

  it('changes currentFrame when frame is complete', function() {
    game.currentFrame.addRoll(4);
    game.currentFrame.addRoll(5);
    expect(game.currentFrame).toEqual(game.frames.frame2);
  });


  // it('passes the rolls to the first frame', function () {
  //
  //   game.calculatePartial(frame, roll1, roll2);
  //   expect(game.frames.frame1.rolls).toEqual([4,5]);
  //   expect(game.frames.frame1.)
  //
  // });

});
