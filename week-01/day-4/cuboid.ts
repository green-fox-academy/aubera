'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let cuboidSideX: number = 10;
let cuboidSideY: number = 10;
let cuboidSideZ: number = 10;

let cuboidSurface: number = (2 * (cuboidSideX * cuboidSideY)) + (2 * (cuboidSideX * cuboidSideZ)) + (2 * (cuboidSideZ * cuboidSideY));
let cuboidVolume: number = cuboidSideX * cuboidSideY * cuboidSideZ;

console.log(`Surface Area: ${cuboidSurface} \nVolume: ${cuboidVolume}`);
