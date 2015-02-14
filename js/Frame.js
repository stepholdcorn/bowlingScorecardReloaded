var Frame = function() {
  this.firstThrowScore = undefined;
  this.secondThrowScore = undefined;
};

Frame.prototype.inputFirstThrowScore = function(fallenPins) {
  this.firstThrowScore = fallenPins;
};

Frame.prototype.inputSecondThrowScore = function(fallenPins) {
  this.secondThrowScore = fallenPins;
};

