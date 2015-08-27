describe('Bowling Frame', function() {

  beforeEach(function(){
   frame = new BowlingFrame();
  });

  it('can store rolls', function() {

    expect(frame.rolls).toBeDefined();

  });

  it('can add the first roll', function() {
    var rollOne = 5;
    frame.addRoll(rollOne);
    expect(frame.rolls).toEqual([5]);
  });

  it('throws an error if you try to add a roll after a strike', function() {
    var rollOne = 10;
    var rollTwo = 4;
    frame.addRoll(rollOne);
    expect(function() {frame.addRoll(rollTwo)}).toThrow('you have already knocked all the pins');
  });

  it('can receive bonus points', function() {
    expect(frame.bonus).toBeDefined();
  });

  it('has a final score which is the sum of the rolls and the bonus points', function() {
    frame.addRoll(5);
    frame.addRoll(5);
    frame.bonus = 5;
    frame.addUpScore(frame.rolls, 5);
    expect(frame.score).toEqual(15);
  });


});
