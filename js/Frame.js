var Frame = function() {
  this.firstThrowScore = undefined;
  this.secondThrowScore = undefined;
  this.totalScore = undefined;
};

Frame.prototype.inputFirstThrowScore = function(fallenPins) {
  this.firstThrowScore = fallenPins;
};

Frame.prototype.inputSecondThrowScore = function(fallenPins) {
  this.secondThrowScore = fallenPins;
};

Frame.prototype.calculateTotalScore = function() {
  this.totalScore = this.firstThrowScore + this.secondThrowScore;
};

