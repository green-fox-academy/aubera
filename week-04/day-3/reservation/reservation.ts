'use strict';

import { IReservation } from './reservation-interface'

class Reservation implements IReservation{
  getRandomNumber(range: number): number{
    return Math.floor(Math.random() * range);
  }
  getDowBooking(): string{
    let dow: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    return dow[this.getRandomNumber(dow.length)];
  }
  getCodeBooking(): string{
    let characters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let code: string = '';
    for (let i: number = 0; i < 8; i++){
      code += characters[this.getRandomNumber(characters.length)];
    }
    return code;
  }

  getReservation(): string{
    return `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`;
  }
}

let reservations: string = '';
for (let i: number = 0; i < 10; i++){
  reservations += '\n' + new Reservation().getReservation();
}
console.log(reservations);
