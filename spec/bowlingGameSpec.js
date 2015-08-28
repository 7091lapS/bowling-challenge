describe('Bowling Game', function() {

  var game = new BowlingGame();


  it('has an array which will contain the bowling frames', function() {
    expect(game.frames).toBeDefined();
  });

  it('makes the frames when created', function () {
    game.startGame(BowlingFrame);
    expect(Object.keys(game.frames).length).toEqual(10);
  });
});
