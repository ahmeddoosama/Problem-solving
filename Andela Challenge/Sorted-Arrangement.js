/*
 * Title:
    Sorted Arrangement

 * Description:
    There is a container which is open from both the ends and that always is in sorted order. To insert an element, its position is determined, then each of the elements to the left or right of that position is removed. The new element is inserted, then the removed elements are added back. Each removal or insertion is an operation. Determine the minimum number of operations after inserting a list of integers into an empty list.

 * Examples:
    An ordered array of integers has been created containing the values [2, 5, 6, 10].The value 3 must be inserted. It is determined that 3 goes between 2 and 5. Either remove the 2, insert the 3 and insert the 2 for a total of 3 operations, or remove the 5, 6 and 10, insert the 3 and then insert the 5, 6 and 10 for a total of 7 operations. The minimal value, 3, is the result chosen.

 * Function Description :
    - Complete the function minimumOperations in the editor below.
    - minimumOperations has the following parameter(s):
        numbers[numbers[0],...numbers[n-1]]: an array of integers

 * Return:
    long int: the minimum operations to create the sorted list from the list of numbers in the given order
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