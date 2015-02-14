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

});