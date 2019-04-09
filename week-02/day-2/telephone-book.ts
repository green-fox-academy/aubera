'use strict';

let contacts: any = {};
contacts['William A. Lathan'] = '405-709-1865';
contacts['John K. Miller'] = '402-247-8568';
contacts['Hortensia E. Foster'] = '606-481-6467';
contacts['Amanda D. Newland'] = '319-243-5613';
contacts['Brooke P. Askew'] = '307-687-29825';

function phoneBook(book: any, name: string = '', num: string = '') {
  if (num === '' && name !== '') {
    if (book.hasOwnProperty(name)) {
      console.log(`This is ${name}'s number: ${book[name]}`);
    } else {
      console.log(`There is no ${name} in the phonebook`);
    }
  } else if (name === '' && num !== ''){
    let ans: string = '';
    for (let i: number = 0; i < Object.keys(book).length; i++){
      if (book[Object.keys(book)[i]] === num){
        ans = `This number: ${num} belongs to ${Object.keys(book)[i]}`;
      } else {
        ans = `There is no contact with this number.`;
      }
    }
    console.log(ans);
  }
}

phoneBook(contacts, 'John K. Miller');
phoneBook(contacts, '', '307-687-2982');
phoneBook(contacts, 'Chris E. Myers');
