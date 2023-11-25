'use strict';

const readlineSync = require('readline-sync');

function basicArrayDemo() {
    // Create an empty array
    const names = [];

    // Push some values onto the end of the array
    names.push('John');
    names.push('Susan');
    names.push('Bill');

    // Access an element/value by index position
    console.log('The value at index position 1 is: ' + names[1]);

    // Can create an array with an initial size
    const nums = new Array(3);

    nums[0] = 2;
    nums[1] = 5;
    nums[2] = 7;

    console.log('Printing the numbers in the nums array');
    for (const num of nums) {
        console.log('The number is: ' + num);
    }
}

function startAtMiddleDemo() {
    const basket = ['oranges', 'apples', 'bananas', 'pears', 'kale', 'broccoli'];

    // Can get the length of an array
    const length = basket.length;

    console.log('The length of the basket array is: ' + length);

    // Can loop over an array using a C-style for loop
    console.log('Printing out array values from the middle to the end');
    for (let i = length / 2; i < length; i++) {
        console.log(`The value at index ${i} is ${basket[i]}`);
    }

}


function studentAttendanceSample() {
    const input = readlineSync.question('How many students do you want to record? ');
    const numOfStudents = parseInt(input, 10);

    // Use the same array size for each parallel array
    const studentFirstNames = new Array(numOfStudents);
    const studentLastNames = new Array(numOfStudents);
    const attendances = new Array(numOfStudents);
    
    // Does not matter which array is used in the condition
    // Since they should all have the same length
    for (let i = 0; i < studentFirstNames.length; i++) {
        const firstName = readlineSync.question('Please enter the first name of a student: ')git;
        const lastName = readlineSync.question('Please enter the last name of a student: ');
        const text = readlineSync.question('Did the student attend class today? ');
        const didAttend = strToBoolean(text);

        studentFirstNames[i] = firstName;
        studentLastNames[i] = lastName;
        attendances[i] = didAttend;
    }

    for (let i = 0; i < attendances.length; i++) {
        const didAttend = attendances[i];
        const fullName = studentFirstNames[i] + ' '
            + studentLastNames[i];

        if (didAttend) {
            console.log('The student ' + fullName + ' attended class today.');
        } else {
            console.log('The student ' + fullName + ' did NOT attend class today.');
        }
    }
}

function parallelMovieArraysSample() {
    const movies = ['Raiders of the Lost Ark', 'Some Movie'];
    const ratings = [5, 3];
    const directors = ['Steven Spielberg', 'Some Person'];

    const movieText = readlineSync.question('What movie are you searching for? ');

    let movieIndex = -1;

    for (let i = 0; i < movies.length; i++) {
        if (movies[i] === movieText) {
            movieIndex = i;
            break;
        }
    }

    // Alternate way to find the index position of a movie
    // let movieIndex = movies.indexOf(movieText);

    if (movieIndex != -1) {
        console.log("Movie at index position: " + movieIndex);
        console.log("Movie: " + movies[movieIndex]);
        console.log("Director: " + directors[movieIndex]);
        console.log("Rating: " + ratings[movieIndex]);
        console.log();
    } else {
        // Display an error message, because the movie was not found
        console.log("Could not find the movie you're after!");
    }
}

function strToBoolean(text) {
    const trueResponses = new Set(['true', 'yes', 'y']);
    const normalisedText = text.trim().toLowerCase();

    if (trueResponses.has(normalisedText)) {
        return true;
    } else {
        return false;
    }
}

// basicArrayDemo();
// startAtMiddleDemo();
// studentAttendanceSample();
parallelMovieArraysSample();