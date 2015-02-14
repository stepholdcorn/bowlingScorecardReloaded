describe('Spare', function() {

  var spare;

  beforeEach(function() {
    spare = new Spare();
  });

  describe('bonus allocation', function() {

    it('is not activated by default', function() {
      expect(spare.bonusActivated).toBe(false);
    });

    it('is activated when total frame score is 10', function() {
      spare.bonusChecker(10);
      expect(spare.bonusActivated).toBe(true);
    });

    it('is not activated when total frame score is not 10', function() {
      spare.bonusChecker(6);
      expect(spare.bonusActivated).toBe(false);
    });

  });

});