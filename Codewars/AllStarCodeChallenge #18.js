/*
 * Title:
    All Star Code Challenge #18

 * Description:
    This Kata is intended as a small challenge for my students
    All Star Code Challenge #18
    Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
    If no occurrences can be found, a count of 0 should be returned.

 * Examples:
    strCount('Hello', 'o') // => 1
    strCount('Hello', 'l') // => 2
    strCount('', 'z') // => 0

 * Notes:
    - The first argument can be an empty string
    - The second string argument will always be of length 1

 * Kata Link:
    https://www.codewars.com/kata/all-star-code-challenge-number-18
*/

// Long Solution
/*
*
*
function strCount(str, letter) {

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter) count++;
    }

    return count;
}
*
*
*/

// Short Solution
function strCount(str, letter) {
   return str.split(letter).length - 1
}