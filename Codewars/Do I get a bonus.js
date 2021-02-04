/*
 * Title:
    Do I get a bonus?


 * Description:
    It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

    Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

    If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

    Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).



 * Examples:
    Test.describe("Basic tests",_=>{
        Test.assertEquals(bonusTime(10000, true), '£100000');
        Test.assertEquals(bonusTime(25000, true), '£250000');
        Test.assertEquals(bonusTime(10000, false), '£10000');
        Test.assertEquals(bonusTime(60000, false), '£60000');
        Test.assertEquals(bonusTime(2, true), '£20');
        Test.assertEquals(bonusTime(78, false), '£78');
        Test.assertEquals(bonusTime(67890, true), '£678900');
    })

 * Kata Link:
    https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
*/

// Short Solution
const bonusTime = (salary, bonus) => '£' + (bonus ? salary * 10 : salary)