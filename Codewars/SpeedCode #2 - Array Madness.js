/*
  Title:
    SpeedCode #2 - Array Madness

  Description:
    Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

  Examples:
    arrayMadness([4, 5, 6], [1, 2, 3]);
      // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

  Kata Link:
    https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript
*/

// Solution
function arrayMadness(a, b) {
    let reducerOne = (sum, num) => sum + num ** 2
    let reducerTwo = (sum, num) => sum + num ** 3

    return a.reduce(reducerOne, 0) > b.reduce(reducerTwo, 0)
}