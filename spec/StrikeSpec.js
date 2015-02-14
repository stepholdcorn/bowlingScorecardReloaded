describe('Strike', function() {

  var strike;

  beforeEach(function() {
    strike = new Strike();
  });

  describe('bonus allocation', function() {

    it('is not activated by default', function() {
      expect(strike.bonusActivated).toBe(false);
    });

    it('is activated when first throw scores 10', function() {
      strike.bonusChecker(10);
      expect(strike.bonusActivated).toBe(true);
    });

    it('is not activated when first throw score is not 10', function() {
      strike.bonusChecker(4);
      expect(strike.bonusActivated).toBe(false);
    });

  });

});