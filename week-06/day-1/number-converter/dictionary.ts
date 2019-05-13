'use strict';

export abstract class Dictionary {
  inputNumber: number;
  numberNames: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  decimalNums: string[] = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  roundNumbs: string[] = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  constructor(inputNumber: number) {
    this.inputNumber = inputNumber;
  }

  abstract numConverter(): string;

  numberToArray(input: number): string[] {
    return input.toString().split('');
  }

  lastTwoDigitsLessThanTwenty(numArray: string[]): string{
    let secondDigit: number = Number(numArray[numArray.length-1]);
    return this.decimalNums[secondDigit];
  }

  lastTwoDifferentDigits(numArray: string[]): string{
    let firstDigit: string = this.roundNumbs[Number(numArray[numArray.length-2]) - 2];
    let secondDigit: string = this.numberNames[Number(numArray[numArray.length-1]) - 1];
    return firstDigit + '-' + secondDigit;
  }

  lastTwoRoundDigits(numArray: string[]): string{
    if (Number(numArray[numArray.length-2]) != 0){
      let firstDigit: string = this.roundNumbs[Number(numArray[numArray.length-2]) - 2];
      return firstDigit;
    } else {
      return '';
    }
  }

  convertLastDigit(numArray: string[]): string{
    return this.numberNames[Number(numArray[numArray.length - 1]) - 1];
  }

  convertLastTwoDigits(numArray: string[]): string{
    let answer: string;
    if (Number(numArray[numArray.length-2] + numArray[numArray.length-1]) < 20 &&
    Number(numArray[numArray.length-2] + numArray[numArray.length-1]) >= 10) {
      answer = this.lastTwoDigitsLessThanTwenty(numArray);
    } else if (Number(numArray[numArray.length-2] + numArray[numArray.length-1]) >= 20 &&
    numArray[numArray.length-1] != '0') {
      answer = this.lastTwoDifferentDigits(numArray);
    } else if (Number(numArray[numArray.length-2] + numArray[numArray.length-1]) < 10){
      answer = this.convertLastDigit(numArray);
    } else {
      answer = this.lastTwoRoundDigits(numArray);
    }
    return answer;
  }

  convertLastThreeDigits(numArray: string[]): string {
    let answer: string;
    let firstDigit: string = this.numberNames[Number(numArray[numArray.length - 3]) - 1] + ' hundred';
    if (numArray[numArray.length - 2] === '0' && numArray[numArray.length - 1] === '0') {
      answer = firstDigit;
    } else {
      answer = firstDigit + ' and ' + this.convertLastTwoDigits(numArray);
    }
    return answer;
  }

  convertLastFourDigits(numArray: string[]): string {
    let answer: string;
    let firstDigit: string = this.numberNames[Number(numArray[numArray.length - 4]) - 1] + ' thousand';
    if (numArray[numArray.length - 3] === '0' && numArray[numArray.length - 2] === '0' && numArray[numArray.length - 1] === '0') {
      answer = firstDigit;
    } else if (numArray[numArray.length - 3] === '0' && numArray[numArray.length - 2] != '0'){
      answer = firstDigit + ' and ' + this.convertLastTwoDigits(numArray);
    } else if (numArray[numArray.length - 3] === '0' && numArray[numArray.length - 2] === '0' && numArray[numArray.length - 1] != '0'){
      answer = firstDigit + ' and ' + this.convertLastDigit(numArray);
    } else {
      answer = firstDigit + ' ' + this.convertLastThreeDigits(numArray);
    }
    return answer;
  }
}
