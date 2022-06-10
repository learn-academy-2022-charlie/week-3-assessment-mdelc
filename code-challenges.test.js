// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
describe("fibFunction", () => {
  const fibLength1 = 6 // Expected output:
  const fibLength2 = 10 // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  it("input a number greater than 2 and return an array with numbers of Fibonacci sequence the same length as the input number",() => {
    expect(fibFunction(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibFunction(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

//   ReferenceError: fibFunction is not defined


// b) Create the function that makes the test pass.

//Pseudo-coding:

// Create a function that takes a number > 2 as an argument.
// Using Fibonacci sequence - adding the 2 previous numbers together for the new number
// Create array that stores the first 2 indexes of the fib sequence [1, 1]
// Use a for loop that adds one more index until it is 2 less than the input number.
// Return needs to be outside of for loop function, otherwise when it was inside the for loop, it quit iterating at 2 indexes added together [1,1]
//

// declare the variable and set it to a function
const fibFunction = (number) => {
  let fibArray = [1, 1]
  for(let i = 0; i < number - 2; i ++) {
    fibArray.push(fibArray[i] + fibArray[i + 1])
  }
  return fibArray
}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("ascOddArray",() => {
  const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"] // Expected output: [-9, 7, 9, 199]
  const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"] // Expected output: [-823, 7, 23]
  it("takes only number values from an array and returns a new array with only odd numbers from least to greatest",() => {
    expect(ascOddArray(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(ascOddArray(fullArr2)).toEqual([-823, 7, 23])
  })
})

 // TypeError: fullArr1 is not a function

// b) Create the function that makes the test pass.

// Pseudo-coding:

// Create a function named ascOddArray that takes an array as a parameter
  // Use .filter() to filter through the input array and return a new array called onlyNumArray that contains only number values
  // further filter numbers that are odd.
// Somehow sort through the new, filtered array with only odd numbers called onlyNumArray from least to greatest
  // Compare values to one another to determine if greater or less and put at end of array if greater than previous value
// Return a new array with the filtered numbers in ascending order (least to greatest)

const ascOddArray = (array) => {
  let onlyNumArray = array.filter(value => {
    if (value % 2 !== 0 && typeof value === 'number') {
      return value
    }
  })
  return onlyNumArray.sort((a, b) => a - b)
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("sumOfArray", () => {
  const numbersToAdd1 = [2, 4, 45, 9] // Expected output: [2, 6, 51, 60]
  const numbersToAdd2 = [0, 7, -8, 12] // Expected output: [0, 7, -1, 11]
  const numbersToAdd3 = [] // Expected output: []
  it("function adds the values of array and returns the accumulating sum", () => {
    expect(sumOfArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(sumOfArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(sumOfArray(numbersToAdd3)).toEqual([])
  })
})

// ReferenceError: sumOfArray is not defined

// Pseudo-coding:

// Create a function named "sumOfArray"
// input will be an array (can be empty array)
// Create a new variable called newArray to store new value/s
// use for loop to iterate through the array values and use built-in method to add accumulating values together.
// return newArray with new value of all values added together. Or if no values in array, return an empty array.

// b) Create the function that makes the test pass.

const sumOfArray = (array) => {
  let newArray = array.map((sum => value => sum += value)(0))
return newArray
}



// const sumOfArray = (array) => {
//   let newArray = array.sum(array)
//   for(let i = 0; i < array.length; i ++)
//   return newArray
// }
