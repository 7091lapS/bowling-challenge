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
    game.addRoll(4);
    game.addRoll(5);
    expect(game.currentFrame).toEqual(game.frames.frame2);
  });

  it('changes current frame when frame has a strike', function() {
    game.addRoll(10);
    expect(game.currentFrame).toEqual(game.frames.frame2);
  });

  it('knows the previous frame', function() {
    expect(game.previousFrame).toEqual(game.frames.frame1);
  });

  it('in case of spare, adds the bonus for the previous frame', function() {
    game.addRoll(9);
    game.addRoll(1);
    game.addRoll(5);
    expect(game.previousFrame.bonus).toEqual(5);
  });


});
