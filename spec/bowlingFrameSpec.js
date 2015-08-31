describe('Bowling Frame', function() {

  beforeEach(function(){
   frame = new BowlingFrame();
  });

  it('can store rolls', function() {
    expect(frame.rolls).toBeDefined();
  });

  it('can receive bonus points', function() {
    expect(frame.bonus).toBeDefined();
  });

  it('can have strike', function() {
    frame.rolls[0] = 10;
    expect(frame.hasStrike()).toEqual(true);
  });

  it('can have a spare', function() {
    frame.partialScore = 10
    expect(frame.hasSpare()).toEqual(true);
  });

  // it('has a partial score without the bonuses', function() {
  //   frame.rolls[0] = 5;
  //   frame.rolls[1] = 4;
  //   // frame.addPartial(frame.rolls);
  //   expect(frame.partialScore).toEqual(9);
  // });
  //
  // it('has a final score which is the sum of the rolls and the bonus points', function() {
  //   frame.bonus = 5;
  //   frame.addRoll(5);
  //   frame.addRoll(4);
  //   frame.addPartial(frame.rolls);
  //   frame.addUpScore(frame.partialScore, 5);
  //   expect(frame.score).toEqual(14);
  // });


});
