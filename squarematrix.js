// Given a square matrix, calculate the absolute difference between the sums of its diagonals. For example, the square matrix ar = [[1, 2, 3], [4, 5, 6] , [ 7, 8, 9]],
// x              x               x
//        x       x        x
//arranged in a 3×3 grid resembling a phone keypad. indexes: 0, 1, 2
//  2, 1, 0

// EXAMPLE INPUT:
// [
//    [11 2 4]
//    [4 5 6]
//    [10 8 -12]
// ]

function absoluteValue(arrayOfArrays) {
  //add all diagonal values from left and right indexes
  //nested loop -- for array of arrays
  // 2 while loops -- first one is going to iterate over array adding 1 to index each time
  // 2 seperate indexes -- one for starting at the beginning of array, one for starting at the end of the array
  //second while loop-- start at the last index of last array, subtract 1 from index each time it iterates over the array
  //add values into 2 new arrays
  // subtraction of the sum of the two arrays to find absolute value
  // push absolute value into a variable called absolute value
  var index = 0;
  var leftDiagonal = [];
  var rightDiagonal = [];
  var output = 0;
  var x = 0;
  var y = arrayOfArrays[index].length - 1;
  while (index < arrayOfArrays.length) {
    leftDiagonal.push(arrayOfArrays[index][x]);
    x++;
    rightDiagonal.push(arrayOfArrays[index][y]);
    y--;

    index++;
  }
  console.log(leftDiagonal);
  console.log(rightDiagonal);
  var sumLeftDiagonal = 0;
  var sumRightDiagonal = 0;
  var indexLeft = 0;
  var indexRight = 0;
  while (indexLeft < leftDiagonal.length) {
    sumLeftDiagonal += leftDiagonal[indexLeft];
    indexLeft++;
    console.log(sumLeftDiagonal);
  }
  while (indexRight < rightDiagonal.length) {
    sumRightDiagonal += rightDiagonal[indexRight];
    indexRight++;
    console.log(sumRightDiagonal);
  }
  output = sumLeftDiagonal - sumRightDiagonal;
  output = Math.abs(output);
  console.log(output);
}
// x             x              x
//        y      y      y
absoluteValue([
  [-11, 2, 4],
  [4, -5, 6],
  [10, 8, -12],
]);
// EXAMPLE OUTPUT: 15
// (11 + 5 + -12 = 4)
// (4 + 5 + 10 = 19)
// (4-19 = -15 OR 19-4 = 15) = absolute value is 15  absolute value will always be positive

// EXAMPLE INPUT 2:
// [
//    [1 2 3]
//    [4 5 6]
//    [7 8 9 ] //absolute value is just difference between the two values, always positive
// ]

// EXAMPLE OUTPUT 2: 0
// (1 + 5 + 9 = 15)
// (3 + 5 + 7 = 15)
// (15 - 15 = 0) = absolute value is 0
