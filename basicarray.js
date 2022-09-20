//1. Write a function that returns the sum of all numbers in a given array.
// NOTE: Do not use any built-in language functions that do this automatically for you.
// Input: [1, 2, 3, 4]
// Output: 10
// Explanation: (1 + 2 + 3 + 4) = 10
// function sumOfNumbers(numbers) {
//   var sum = 0;
//   var index = 0;
//   while (index < numbers.length) {
//     sum += numbers[index];
//     index++;
//   }
//   console.log(sum);
//   return sum;
// }
// sumOfNumbers([1, 2, 3, 4]);

// 2. Given an array of numbers, write a function that returns a new array that contains all numbers from the original array that are less than 100.
// Input: [99, 101, 88, 4, 2000, 50]
// Output: [99, 88, 4, 50]
// function lessThanOneHundred(numbers) {
//   var numbersLessThanHundred = [];
//   var index = 0;
//   while (index < numbers.length) {
//     if (numbers[index] < 100) {
//       numbersLessThanHundred.push(numbers[index]);
//     }
//     index++;
//   }
//   console.log(numbersLessThanHundred);
// }
// lessThanOneHundred([99, 101, 88, 4, 2000, 50]);

// 3. Given an array of numbers, write a function that returns a new array whose values are the original array’s value doubled.
//Input: [4, 2, 5, 99, -4]
//Output: [8, 4, 10, 198, -8]
//write function with a name of doubleIt
//set up new empty array to push doubled numbers into
//while loop to iterate through each number and double each number
//console.log(doubled array)
// function doubleIt(arrayofNumbers) {
//   var index = 0;
//   var doubled = [];
//   while (index < arrayofNumbers.length) {
//     doubled.push(arrayofNumbers[index] * 2);
//     index++;
//   }
//   console.log(doubled);
// }
// doubleIt([4, 2, 5, 99, -4]);

//4. watch video
//Write a function that returns the greatest value from an array of numbers.
// Input: [5, 17, -4, 20, 12]
// Output: 20
// function greatestNumber(numbers) {
//   var max = numbers[0];
//   var index = 0;
//   while (index < numbers.length) {
//     if (numbers[index] > max) {
//       max = numbers[index];
//     }
//     index++;
//   }
//   console.log(max);
// }
// greatestNumber([5, 17, -4, 20, 12]);

// 5. Write a function that accepts an array of numbers and returns the product of all the numbers.
// Input: [1, 2, 3, 4]
// Output: 24
// Explanation: (1 x 2 x 3 x 4) = 24
// function productOfNumbers(numbersArray) {
//   var product = 1;
//   var index = 0;
//   while (index < numbersArray.length) {
//     product = product * numbersArray[index];
//     index++;
//   }
//   console.log(product);
//   return product;
// }
// productOfNumbers([1, 2, 3, 4]);

//6. Given an array, write a function that returns an array that contains the original array’s values in reverse.
// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]
// function reverseArray(numbersArray) {
//   var reversed = [];
//   var index = numbersArray.length - 1;
//   while (index > 0) {
//     reversed.push(numbersArray[index]);
//     index--;
//   }
//   console.log(reversed);
//   return reversed;
// }
// reverseArray([1, 2, 3, 4, 5]);

//7. Given an array of numbers, write a function that returns a new array in which only select numbers from the original array are included, based on the following details:
//The new array should always start with the first number from the original array. The next number that should be included depends on what the first number is. The first number dictates how many spaces to the right the computer should move to pick the next number. For example, if the first number is 2, then the next number that the computer should select would be two spaces to the right. This number gets added to the new array. If this next number happens to be a 4, then the next number after that is the one four spaces to the right. And so on and so forth until the end of the array is reached.
// Input: [2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2]
//Output:[2, 3, 1, 2, 2, 1, 5, 2, 2]
// function skips(array) {
//   var newArray = [];
//   var index = 0;
//   while (index < array.length) {
//     newArray.push(array[index]);
//     index += array[index];
//   }
//   console.log(newArray);
//   return newArray;
// }
// skips([2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2]);
