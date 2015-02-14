var Scorecard = function() {

  this.frameScores = [];

};

Scorecard.prototype.requestScore = function() {
  this.frameScores.push(frame.totalScore);
};