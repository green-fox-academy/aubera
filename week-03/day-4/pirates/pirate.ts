'use strict';

export class Pirate {
  intoxicationLevel: number = 0;
  isDead: boolean = false;
  isPassedOut: boolean = false;

  drinkSomeRum(numOfRum: number): void {
    !this.isDead ? this.intoxicationLevel += numOfRum : console.log("He's dead.");
  }

  howsItGoingMate(): void {
    if (this.intoxicationLevel < 4 && !this.isDead) {
      console.log('Pour me anudder!');
    } else if (this.intoxicationLevel >= 4 && !this.isDead) {
      console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
      this.isPassedOut = true;
    } else if (this.isDead) {
      console.log("He's dead.");
    }
  }

  die(): void {
    this.isDead = true;
  }

  brawl(x: Pirate): void {
    if (!x.isDead) {
      let num: number = Math.floor(Math.random() * 3);
      if (num === 0){
        this.isDead = true;
      } else if (num === 1){
        x.isDead = true;
      } else if (num === 2){
        this.isPassedOut = true;
        x.isPassedOut = true;
      }
    }
  }
}
