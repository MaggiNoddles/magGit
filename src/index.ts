import {question} from 'readline-sync';
import { basicArraySample, copyArraySample } from './array-samples';
import { mapSampleOne, mapSampleTwo } from './map-samples';

//example to test
function fillUniqueArray() {
    const nums: number [] = new Array<number>(10);

    for (let i = 0; i < nums.length; i++) {
        const numText = question('Enter a number: ');
        console.log(numText);
    }
}

fillUniqueArray();

//has this been stagged? if not. 

//okay this is working. 

//test branch time

//this was my original branch

/// and here



// basicArraySample();
// copyArraySample();
mapSampleOne();
// mapSampleTwo();