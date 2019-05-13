'use strict'

export function anagram(firstString: string, secondString: string): boolean {
  return firstString.split('').sort().join('') === secondString.split('').sort().join('');
}
