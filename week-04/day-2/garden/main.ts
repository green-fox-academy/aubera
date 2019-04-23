'use strict';

import { Tree } from './tree'
import { Flower } from './flower'
import { Garden } from './garden'

let myFirstGarden: Garden = new Garden();
myFirstGarden.plantFlower(new Flower('yellow'));
myFirstGarden.plantFlower(new Flower('blue'));
myFirstGarden.plantTree(new Tree('purple', 10, 0.4));
myFirstGarden.plantTree(new Tree('orange', 10, 0.4));
myFirstGarden.info();

myFirstGarden.watering(40);
myFirstGarden.info();

myFirstGarden.watering(70);
myFirstGarden.info();
