describe('Strike', function() {

  var strike;

  beforeEach(function() {
    strike = new Strike();
  });

  describe('bonus', function() {

    it('is not activated by default', function() {
      expect(strike.bonusActivated).toBe(false);
    });

    it('is activated when first throw scores 10', function() {
      strike.bonusChecker(10);
      expect(strike.bonusActivated).toBe(true);
    });

  });

});