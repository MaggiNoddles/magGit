import {question} from 'readline-sync';

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