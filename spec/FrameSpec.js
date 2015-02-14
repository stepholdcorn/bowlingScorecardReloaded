describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('by default', function() {

    it('has an undefined first throw score', function() {
      expect(frame.firstThrowScore).toBe(undefined);
    });

    it('has an undefined second throw score', function() {
      expect(frame.secondThrowScore).toBe(undefined);
    });

  });

  describe('updating the score', function() {

    it('stores the first throw score', function() {
      frame.inputFirstThrowScore(4);
      expect(frame.firstThrowScore).toEqual(4);
    });

    it('stores the second throw score', function() {
      frame.inputSecondThrowScore(2);
      expect(frame.secondThrowScore).toEqual(2);
    });

  });

});