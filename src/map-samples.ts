export function mapSampleOne() : void {
    const productPrices = new Map<string, number>();

    // Each entry is a key/value pair.  The key must be unique
    productPrices.set('Banana Bread', 3.80);
    productPrices.set('Caffe Latte', 4.20);
    productPrices.set('Beef Burger', 12.00);

    // Using the same key twice will overwrite the existing value
    productPrices.set('Caffe Latte', 4.30);

    // Get the value out using its associated key
    console.log('The price of a banana bread is: ' + productPrices.get('Banana Bread'));

    // Can also get the size of the map/dictionary
    console.log('The map/dictionary has a size of: ' + productPrices.size);
}

export function mapSampleTwo() : void {
    // A dictionary to store the frequency of a number
    // The key is the number, the value is the number of times it occurs
    // const numFrequencies = new Map<number, number>();

    // numFrequencies.set(1, 3);
    // numFrequencies.set(2, 5);
    // numFrequencies.set(3, 0);
    // numFrequencies.set(4, 2);

    // // You can loop over each entry in a dictionary using a for..of
    // console.log('Iterating over each key/value pair entry');
    // for (const [key, value] of numFrequencies) {
    //     console.log(`The number ${key} occured ${value} times.`);
    // }

    // console.log();
    // console.log('Iterating over each key in the dictionary');
    // for (const key of numFrequencies.keys()) {
    //     const value = numFrequencies.get(key);
    //     console.log(`The number ${key} occured ${value} times.`);
    // }
}