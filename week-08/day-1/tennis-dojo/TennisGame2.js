var TennisGame2 = function(player1Name, player2Name) {
    this.P1point = 0;
    this.P2point = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.getScore = function() {
    var score;
    let scores = ['Love', 'Fifteen', 'Thirty', 'Forty'];
    if (this.P1point === this.P2point) {
      if (this.P1point < 3) score = scores[this.P1point] + '-All';
      else score = 'Deuce';
    }
    else if (this.P1point >= 4 || this.P2point >= 4) {
      if (this.P1point > this.P2point) {
        if (this.P1point - this.P2point >= 2) score = 'Win for player1';
        else score = 'Advantage player1';
      } else {
        if (this.P2point - this.P1point >= 2) score = 'Win for player2';
        else score = 'Advantage player2';
      }
    }
    else if (this.P1point != this.P2point) score = scores[this.P1point] + '-' + scores[this.P2point];
    return score;
};

TennisGame2.prototype.wonPoint = function(player) {
  player === 'player1' ? this.P1point++ : this.P2point++;
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}