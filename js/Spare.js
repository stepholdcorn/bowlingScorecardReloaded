var Spare = function() {

  this.bonusActivated = false;

};

Spare.prototype.bonusChecker = function(totalScore) {
  if (totalScore === 10) {
    this.bonusActivated = true;
  };
};