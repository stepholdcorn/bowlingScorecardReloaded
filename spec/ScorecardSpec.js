describe('Scorecard', function() {

  var scorecard;
  var frame;

  beforeEach(function() {
    scorecard = new Scorecard();
    frame = jasmine.createSpyObj('frame', ['totalScore']);
  });

  describe('by default', function() {

    it('has no frame scores', function() {
      expect(scorecard.frameScores.length).toEqual(0);
    });

  });

  describe('updating the frame scores', function() {

    it('stores the individual scores', function() {
      SpyOn(frame, 'totalScore')and.ReturnValue(6);
      scorecard.requestScore();
      expect(scorecard.frameScores[0]).toEqual(6);
    });

  });

});