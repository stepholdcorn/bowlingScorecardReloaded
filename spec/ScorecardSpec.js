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

});