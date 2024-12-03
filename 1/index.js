import input from './input.js';

// Split input into an array of numbers
const inputArray = input.split(/\s|\n/).filter(Boolean);

// Split the array into two columns, A for even indexes and B for odd indexes
const columnA = inputArray.filter((_, index) => index % 2 === 0);
const columnB = inputArray.filter((_, index) => index % 2 !== 0);

// Checks how many times each value in column A is repeated in column B,
// then multiplies the value by the number of repeats
const repeats = columnA.map((value) => value * columnB.filter((v) => v === value).length);

// Sorts the columns in ascending order
const columnASorted = columnA.sort((a, b) => a - b);
const columnBSorted = columnB.sort((a, b) => a - b);

// Calculates the difference between the values in the sorted columns
const diffArray = columnASorted.map((value, index) => Math.abs(value - columnBSorted[index]));

// Sums the differences
const sumOne = diffArray.reduce((acc, value) => acc + value, 0);

// Sums the number of repeats
const sumTwo = repeats.reduce((acc, value) => acc + value, 0);

// Solution for part one
console.log(sumOne);

// Solution for part two
console.log(sumTwo);
