// #  1. Use a nested loop to convert an array of number pairs into a single flattened array.
// For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].
// function convertToFlattened(arraysOfNumbers) {
//   var index1 = 0;
//   var flattened = [];
//   while (index1 < arraysOfNumbers.length) {
//     var numberPair = arraysOfNumbers[index1];
//     var index2 = 0;
//     while (index2 < arraysOfNumbers.length) {
//       var number = numberPair[index2];
//       flattened.push(number);
//       index2++;
//     }
//     index1++;
//   }
// }
// convertToFlattened([
//   [1, 3],
//   [8, 9],
//   [2, 16],
// ]);

// #  2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// #     For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].
// function combineTheStrings(stringArray1, stringArray2) {
//   var index1 = 0;
//   var combinedStrings = [];
//   while (index1 < stringArray1.length) {
//     var index2 = 0;
//     while (index2 < stringArray2.length) {
//       combinedStrings.push(stringArray1[index1] + stringArray2[index2]);
//       index2++;
//     }
//     index1++;
//   }
//   console.log(combinedStrings);
// }
// combineTheStrings(["a", "b", "c"], ["d", "e", "f", "g"]);

// #  3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// #     For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].
// function comboLetters(letterArray) {
//   var index1 = 0;
//   var finalArray = [];
//   while (index1 < letterArray.length) {
//     var index2 = 0;
//     while (index2 < letterArray.length) {
//       if (letterArray[index1] !== letterArray[index2]) {
//         finalArray.push(letterArray[index1] + letterArray[index2]);
//       }
//       index2++;
//     }
//     index1++;
//   }
//   console.log(finalArray);
// }
// comboLetters(["a", "b", "c", "d"]);

// #  4. Use a nested loop to find the largest product of any two different numbers within a given array.
// #     For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.
// function largestProductOfTwo(numbersArray) {
//   var index1 = 1;
//   var product = numbersArray[0];
//   while (index1 < numbersArray.length) {
//     var index2 = 1;
//     while (index2 < numbersArray.length) {
//       if (numbersArray[index1] !== numbersArray[index2] && numbersArray[index1] * numbersArray[index2] > product) {
//         product = numbersArray[index1] * numbersArray[index2];
//       }
//       index2++;
//     }
//     index1++;
//   }
//   console.log(product);
// }
// largestProductOfTwo([5, -2, 1, -9, -7, 2, 6]);

// #  5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// For example, [[1, 3], [8, 9], [2, 16]] becomes 39.
// function addAll(arraysOfNumbers) {
//   var index1 = 0;
//   var sum = 0;
//   while (index1 < arraysOfNumbers.length) {
//     var numberPair = arraysOfNumbers[index1];
//     var index2 = 0;
//     while (index2 < numberPair.length) {
//       var number = numberPair[index2];
//       sum += number;
//       index2++;
//     }
//     index1++;
//   }
//   console.log(sum);
// }
// addAll([
//   [1, 3],
//   [8, 9],
//   [2, 16],
// ]);

// #  6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// #     For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].
// function addingEachNumber(array1, array2) {
//   var index1 = 0;
//   var sum = [];
//   while (index1 < array1.length) {
//     var index2 = 0;
//     while (index2 < array2.length) {
//       sum.push(array1[index1] + array2[index2]);
//       index2++;
//     }
//     index1++;
//   }
//   console.log(sum);
// }
// addingEachNumber([1, 2], [6, 7, 8]);

// #  7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// #     For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

//this combination will allow for a number times itself based on the output

function everyCombination(numbersArray) {
  var index1 = 0;
  var combinations = [];
  while (index1 < numbersArray.length) {
    var index2 = 0;
    while (index2 < numbersArray.length) {
      combinations.push(numbersArray[index1] * numbersArray[index2]);
      index2++;
    }
    index1++;
  }
  console.log(combinations);
}
everyCombination([2, 8, 3]);

// #  8. Use a nested loop to find the largest sum of any two different numbers within an array.
// For example, [1, 8, 3, 10] becomes 18.
// function findTheLargestSum(arrayOfNumbers) {
//   var index1 = 0;
//   var largestSum = arrayOfNumbers[0] + arrayOfNumbers[1];
//   while (index1 < arrayOfNumbers.length) {
//     var index2 = 0;
//     while (index2 < arrayOfNumbers.length) {
//       if (
//         arrayOfNumbers[index1] !== arrayOfNumbers[index2] &&
//         arrayOfNumbers[index1] + arrayOfNumbers[index2] > largestSum
//       ) {
//         largestSum = arrayOfNumbers[index1] + arrayOfNumbers[index2];
//       }
//       index2++;
//     }
//     index1++;
//   }
//   console.log(largestSum);
// }
// findTheLargestSum([1, 8, 3, 10]);

// #  9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// #     For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].
// function firstToEqualTen(numbersArray) {
//   var index1 = 0;
//   // having issues understanding why this needs boolean
//   var totalNumbers = false;
//   while (index1 < numbersArray.length) {
//     var index2 = 0;
//     while (index2 < numbersArray.length) {
//       if (
//         numbersArray[index1] !== numbersArray[index2] &&
//         numbersArray[index1] + numbersArray[index2] == 10 &&
//         totalNumbers === false
//       ) {
//         totalNumbers = [numbersArray[index1], numbersArray[index2]];
//       }
//       index2++;
//     }
//     index1++;
//   }
//   console.log(totalNumbers);
// }
// firstToEqualTen([2, 5, 3, 1, 0, 7, 11]);

// # 10. Use a nested loop to convert an array of string arrays into a single string.
// #     For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".
// function stringItTogether(arrayOfArraysOfStrings) {
//   var sumOfStrings = "";
//   var index1 = 0;
//   while (index1 < arrayOfArraysOfStrings.length) {
//     var index2 = 0;
//     while (index2 < arrayOfArraysOfStrings[index1].length) {
//       sumOfStrings = sumOfStrings + arrayOfArraysOfStrings[index1][index2];
//       index2++;
//     }
//     index1++;
//   }
//   console.log(sumOfStrings);
// }
// stringItTogether([["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]]);
