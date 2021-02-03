/*
 * Title:
    Get the mean of an array


 * Description:
    It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

    Return the average of the given array rounded down to its nearest integer.

    The array will never be empty.



 * Examples:
    Test.assertEquals(getAverage([2,2,2,2]),2);
    Test.assertEquals(getAverage([1,2,3,4,5,]),3);
    Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);

 * Kata Link:
    https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
*/

// Long Solution
/*
*
*
function getAverage(marks){

  let average = 0;
  for(let i = 0; i < marks.length; i++){
    average += marks[i];
  }
  
    return Math.floor(average / marks.length);
}
*
*
*/

// Short Solution
function getAverage(marks){
    return Math.floor(marks.reduce((a, b) => a + b) / marks.length)
}