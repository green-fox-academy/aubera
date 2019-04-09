'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(acc: number) {
  let res: any[] = [];
  for (let i: number = 0; i < accounts.length; i++) {
    accounts[i].accountNumber === acc ? res.push(accounts[i].clientName, accounts[i].balance) : '';
  }
  console.log(res);
}

getNameAndBalance(11234543);

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

function transferAmount(list: any[], from: number, to: number, cash: number) {
  let accNums: number[] = [];
  for (let i: number = 0; i < list.length; i++) {
    accounts[i].accountNumber === from ? accounts[i].balance -= cash : '';
    accounts[i].accountNumber === to ? accounts[i].balance += cash : '';
    accNums.push(accounts[i].accountNumber)
  }
  if (accNums.indexOf(from) === -1) {
    console.log('404 - account not found');
  } else if (accNums.indexOf(to) === -1){
    console.log('404 - account not found')
  } else {
    console.log(accounts);
  }
  // accNums.indexOf(from) || accNums.indexOf(to) === -1 ? console.log('404 - account not found') : console.log(accounts);
}

transferAmount(accounts, 43546731, 23456311, 500.0);

export = {
  getNameAndBalance,
  transferAmount,
  accounts
};
