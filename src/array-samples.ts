export function basicArraySample() : void {
    // Create an empty array
    const names: string[] = [];

    // Push some values onto the end of the array
    names.push('John');
    names.push('Susan');
    names.push('Bill');

    // Access an element/value by index position
    console.log('The value at index position 1 is: ' + names[1]);

    // Can create an array with an initial size
    const nums = new Array<number>(3);

    nums[0] = 2;
    nums[1] = 5;
    nums[2] = 7;

    console.log('Printing the numbers in the nums array');
    for (const num of nums) {
        console.log('The number is: ' + num);
    }
}

export function copyArraySample() : void {
    const nums = [2, 4, 6, 7, 8];

    // Can assign the value of the 'nums' array to another variable
    // But the value is just the memory address (reference)
    // const otherNums = nums;

    // To copy the 'nums' array we need to create a new array
    const otherNums = new Array<number>(nums.length);
    // Then use a for loop
    for (let i = 0; i < otherNums.length; i++) {
        otherNums[i] = nums[i];
    }

    // Change a value in the copied array
    otherNums[3] = 8;
    otherNums[4] = 10;

    console.log('\'nums\' array data');
    console.log(nums);
    console.log();

    console.log('\'otherNums\' array data');
    console.log(otherNums);
}
