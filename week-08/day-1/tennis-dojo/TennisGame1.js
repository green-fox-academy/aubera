function TennisGame1(player1Name, player2Name) {
  this.m_score1 = 0;
  this.m_score2 = 0;
  this.player1Name = player1Name;
  this.player2Name = player2Name;
}

TennisGame1.prototype.wonPoint = function(playerName) {
  playerName === 'player1' ? this.m_score1 += 1 : this.m_score2 += 1;
};

TennisGame1.prototype.getScore = function() {
  let score;
  let scores = ['Love', 'Fifteen', 'Thirty', 'Forty'];
  if (this.m_score1 === this.m_score2) {
    if (this.m_score1 < 3) score = scores[this.m_score1] + '-All';
    else score = "Deuce";
  }
  else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
    if (this.m_score1 > this.m_score2) {
      if (this.m_score1 - this.m_score2 >= 2) score = "Win for player1";
      else score = "Advantage player1";
    } else {
      if (this.m_score2 - this.m_score1 >= 2) score = "Win for player2";
      else score = "Advantage player2";
    }
  }
  else score = scores[this.m_score1] + '-' + scores[this.m_score2];
  return score;
};

if (typeof window === "undefined") {
  module.exports = TennisGame1;
}