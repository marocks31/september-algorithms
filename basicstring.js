//1. Write a function that returns the reverse of a given string.

// Input: “abcde”
// Output: “edcba”

// function reverseString(string) {
//   let reverse = "";
//   let index = string.length - 1;
//   while (index >= 0) {
//     reverse += string[index];
//     index--;
//   }
//   console.log(reverse);
// }
// reverseString("abcde");

//2. Given a string, write a function that returns true if the “$” character is contained within the string or false if it is not.

// Input: “i hate $ but i love money i know i know im crazy”
// Output: true

// Input: “abcdefghijklmnopqrstuvwxyz”
// Output: false

//3. Given a string, write a function that returns a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)

// function capEveryOther(string) {
//   // empty string variable for every other letter capitalized
//   var capitalizedString = "";
//   // index variable
//   var index = 0;

// var noComma = string.replaceAll(",", ""); //have to add the comma back in...
// while loop
//   while (index < string.length) {
//     if (string[index] % 2 == 0) {
//       string[index].toUpperCase();
//     } else {
//       string[index];
//     }
//     capitalizedString = capitalizedString + string[index];
//     index = index + 1;
//   }

//   console.log(capitalizedString);
//   // .toUpperCase method
//   // iterate by 2-- will have an issue with the comma... find method online
//   // return capitalized variable
//   return capitalizedString;
// }
// capEveryOther(`hello, how are your porcupines today?`);
// Input: “hello, how are your porcupines today?”
// Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?” //need to ignore the comma...

//4. Given a string, write a function that returns the first occurence of two duplicate characters in a row, and return the duplicated character.

// Input: “abcdefghhijkkloooop”
// Output: “h”

//5.Given a string, write a function that returns true if it is a palindrome, and false if it is not. (A palindrome is a word that reads the same both forward and backward.)

// Input: “racecar”
// Output: true

// Input: “baloney”
// Output: false

//6. Given two strings of equal length, write a function that returns the number of characters that are different between the two strings.

// Input: "ABCDEFG", "ABCXEOG"
// Output: 2

// Explanation: While the A, B, C, E, and G are in the same place for both strings, they have different characters in the other spaces. Since there are 2 such spaces that are different (the D and F in the first string), we return 2.

// Input: "ABCDEFG", "ABCDEFG",
// Output: 0

//7. Given a string of words, write a function that returns a new string that contains the words in reverse order. //This is complicated because it will reverse every character, not just the location of the words.

// Input: “popcorn is so cool isn’t it yeah i thought so”
// Output: “so thought i yeah it isn’t cool so is popcorn”

// function reverseString(string) {
//   //create function and input
//   //create empty variable that will be reverse string
//   //while loop that iterates through string and pushes each character from back of original string into reversed variable, until it hits 0
//   var reversed = "";
//   var index = 0;
//   while (index > string.length) {
//     reversed += string[index];
//     index--;
//   }
//   console.log(reversed);
//   return reversed;
// }
// reverseString(`popcorn is so cool isnt it yeah i thought so`);
