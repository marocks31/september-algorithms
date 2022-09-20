// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

// function findTheMinimum(numbersArray) {
//   var index = 0;
//   var minimum = numbersArray[0];
//   while (index < numbersArray.length) {
//     if (numbersArray[index] < minimum) {
//       minimum = numbersArray[index];
//     }
//     index++;
//   }
//   console.log(minimum);
// }
// findTheMinimum([5, 10, 8, 3, 9]);

// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

// #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

// # 10. Start with an array of numbers and compute the maximum number.
// #     For example, [5, 10, 8, 3] becomes 10.

// function findTheMax(numbersArray) {
//   var index = 0;
//   var max = numbersArray[0];
//   while (index < numbersArray.length) {
//     if (numbersArray[index] > max) {
//       max = numbersArray[index];
//     }
//     index++;
//   }
//   console.log(max);
// }

// findTheMax([100, 5, 10, 8, 3]);

// # 11. Start with an array of numbers and compute the maximum number.
// #     For example, [69, 45, 32, 22, -2, 89] becomes 89.

// function findMaxNumber(numbersArray) {
//   var index = 0;
//   var max = numbersArray[0];
//   while (index < numbersArray.length) {
//     if (numbersArray[index] > max) {
//       max = numbersArray[index];
//     }
//     index++;
//   }
//   console.log(max);
// }
// findMaxNumber([69, 45, 32, 22, -2, 89]);

// 12. Start with an array of numbers and compute the the minumum number.
// #     For example, [-9, 0, 3, 4, -11, -44, 4] becomes -44.

// function minimumNumberFinder(numbersArray) {
//   var index = 0;
//   var minimum = numbersArray[0];
//   while (index < numbersArray.length) {
//     if (numbersArray[index] < minimum) {
//       minimum = numbersArray[index];
//     }
//     index++;
//   }
//   console.log(minimum);
// }
// minimumNumberFinder([-9, 0, 3, 4, -11, -44, 4]);
