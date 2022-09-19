//1. Given two arrays of strings, return a new string that contains every combination of a string from the first array concatenated with a string from the second array.

//Input: ["a", "b", "c"], ["d", "e", "f", "g"]
//Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]

//2. Given ONE array of strings, return a new array that contains every combination of each string with every other string in the array.

//Input: ["a", "b", "c", "d"]
//Output: ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]

//3. Find the largest product of any two numbers within a given array.

//Input: [5, -2, 1, -9, -7, 2, 6]
// Output: 63 (-9 * -7)

//4. Given an array of numbers, return a new array containing just two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.

//Specifically use nested loops to solve this exercise even though there are other approaches as well.

//Input: [2, 5, 3, 1, 0, 7, 11]
//Output: [3, 7]

//Input: [1, 2, 3, 4, 5]
//Output: false (While 1, 2, 3, and 4 altogether add up to 10, we're seeking just one pair of numbers.)

//5. Given two sorted arrays, merge the second array into the first array while ensuring that the first array remains sorted. Do not use any built-in sort methods.

//Input :
//A : [1, 5, 8]
//B : [6, 9]

//Modified A : [1, 5, 6, 8, 9]

//6.Given an array of numbers, return true if the array is a "100 Coolio Array", or false if it is not.

//A "100 Coolio Array" meets the following criteria:

//Its first and last numbers add up to 100,
//Its second and second-to-last numbers add up to 100,
//Its third and third-to-last numbers add up to 100,
//and so on and so forth.

//Here are examples of 100 Coolio Arrays:

//[1, 2, 3, 97, 98, 99]
//[90, 20, 70, 100, 30, 80, 10]

//7 Write a function to find the longest common prefix string amongst an array of strings.

//If there is no common prefix, return an empty string "".

//Example 1:

///Input: ["flower","flow","flight"]
//Output: "fl"
//Example 2:

//Input: ["dog","racecar","car"]
//Output: ""
//Explanation: There is no common prefix among the input strings.
//Note:

//All given inputs are in lowercase letters a-z.
