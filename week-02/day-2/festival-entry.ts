'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

type FestivalGoer = {
  name: string,
  alcohol: number,
  guns: number
};

const queue: FestivalGoer[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

function entrySortByAlcoholAndGuns(arr: any[]): FestivalGoer[] {
  let swap: any[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = 1; j < arr.length; j++) {
      if (arr[j].alcohol < arr[j - 1].alcohol) {
        swap = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = swap;
      } else if (arr[j].alcohol == arr[j - 1].alcohol && arr[j].guns < arr[j - 1].guns) {
        swap = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = swap;
      }
    }
  }
  return arr;
}

// Create a securityCheck function that takes the queue as a parameter
// and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to
// securityAlcholLoot) and let them enter the festival

let entryOrder: FestivalGoer[] = entrySortByAlcoholAndGuns(queue);
function securityCheck(arr: any[]): any {
  let watchlist: string[] = [];
  let entryList: string[] = [];
  let securityAlcoholLoot: number = 0;
  arr.filter(element => element.guns !== 0 ? watchlist.push(element.name) : '');
  arr.filter(element => element.alcohol !== 0 ? securityAlcoholLoot += element.alcohol : '' );
  arr.filter(element => element.alcohol !== 0 ? element.alcohol = 0 : '');
  arr.filter(element => element.alcohol === 0 && element.guns === 0 ? entryList.push(element.name) : '');
  console.log(`These people are on the watchlist: ${watchlist}\n
    This much alcohol have been confiscated: ${securityAlcoholLoot}\n
    These people can enter the festival: ${entryList}\n`);
}

securityCheck(entryOrder);

export = securityCheck;
