var Scorecard = function() {

  this.frameScores = [];
  this.runningScore = 0;

};

Scorecard.prototype.requestScore = function(frameScore) {
  this.frameScores.push(frameScore);
};

Scorecard.prototype.calculateRunningScore = function() {
  for (var i = 0; i < this.frameScores.length; i++) {
    this.runningScore += this.frameScores[i];
  };
};

