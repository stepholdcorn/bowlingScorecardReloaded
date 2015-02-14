var Strike = function() {

  this.bonusActivated = false;

};

Strike.prototype.bonusChecker = function(firstThrowScore) {
  if (firstThrowScore === 10) {
    this.bonusActivated = true;
  };
};

