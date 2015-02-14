describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('by default', function() {

    it('has no frame scores', function() {
      expect(scorecard.frameScores.length).toEqual(0);
    });

  });

  describe('updating the scores', function() {

    it('stores the individual frame scores', function() {
      scorecard.requestScore(6);
      expect(scorecard.frameScores[0]).toEqual(6);
    });

    it('calculates a total running score', function() {
      scorecard.requestScore(6);
      scorecard.requestScore(8);
      scorecard.calculateRunningScore();
      expect(scorecard.runningScore).toEqual(14);
    });

  });

});