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

  // it('passes the rolls to the first frame', function () {
  //
  //   game.calculatePartial(frame, roll1, roll2);
  //   expect(game.frames.frame1.rolls).toEqual([4,5]);
  //   expect(game.frames.frame1.)
  //
  // });

});
