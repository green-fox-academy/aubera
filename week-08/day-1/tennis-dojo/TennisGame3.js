var TennisGame3 = function(player1Name, player2Name) {
    this.player2Score = 0;
    this.player1Score = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame3.prototype.getScore = function() {
    var score;
    if ((this.player1Score < 4 && this.player2Score < 4) && (this.player1Score + this.player2Score < 6)) {
        var points = ["Love", "Fifteen", "Thirty", "Forty"];
        score = points[this.player1Score];
        return (this.player1Score == this.player2Score) ? score + "-All" : score + "-" + points[this.player2Score];
    } else {
        if (this.player1Score == this.player2Score) return "Deuce";
        score = this.player1Score > this.player2Score ? this.player1Name : this.player2Name;
        return ((this.player1Score - this.player2Score) * (this.player1Score - this.player2Score) == 1) ? "Advantage " + score : "Win for " + score;
    }
};

TennisGame3.prototype.wonPoint = function(playerName) {
  playerName === 'player1' ? this.player1Score += 1 : this.player2Score += 1;
};

if (typeof window === "undefined") {
    module.exports = TennisGame3;
}