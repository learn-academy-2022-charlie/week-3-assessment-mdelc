// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

a) Create a test with expect statements for each of the variables provided.
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
// Using a for loop, have the indexes of number that is less than the input number returned in a new variable that stores them.
// Create another function that uses the new variable to add the two previous indexes together and create another array that stores these values.
// Use .map() method to return the value[i] of the number input

  fibFunction = (numberInput) => {

}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("ascOddArray",() => {
  const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"] // Expected output: [-9, 7, 9, 199]
  const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"] // Expected output: [-823, 7, 23]
  it("takes only number values from an array and returns a new array with only odd numbers from least to greatest",() => {
    expect(fullArr1()).toEqual([-9, 7, 9, 199])
    expect(fullArr2()).toEqual([-823, 7, 23])
  })
})

 // TypeError: fullArr1 is not a function

// b) Create the function that makes the test pass.

// Pseudo-coding:

// Create a function named ascOddArray that takes an array as a parameter
  // Use .filter() to filter through the input array and return a new array called onlyNumArray that contains only number values
// Somehow sort through the new, filtered array called onlyNumArray from least to greatest
// Return a new array with the filtered numbers in ascending order (least to greatest)


const ascOddArray = (array) => {
  let onlyNumArray = array.filter(value => {
  return typeof value === 'number'
  for(let i = 0; i < array.length; i ++)
if(value[i] > )

  })
}

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
//
//
//





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
// Create a new variable called newArray to store new value
// use for loop to iterate through the array values and use .sum() method to add accumulating values together.
// return array accumulated sum

// b) Create the function that makes the test pass.

const sumOfArray = (array) => {
  let newArray = array.sum(array)
  for(let i = 0; i < array.length; i ++)
  return newArray
}
