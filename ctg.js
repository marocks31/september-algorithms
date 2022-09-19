// function factors(n, p) {
//   //all factors of number, at position of 28
//   let index = 1;
//   let tempArray = [];

//   //   # check all numbers between 1 and the square root of the number (because you guys have some big numbers - there was a timeout error otherwise)
//   while (index <= Math.sqrt(n)) {
//     if (n % index === 0) {
//       //       # push the number and it's division "pair" onto our array (will be duplicates)
//       tempArray.push(index);
//       tempArray.push(n / index);
//     }
//     index++;
//   }
//   const unique = (value, index, self) => {
//     return self.indexOf(value) === index;
//   };
//   //   # remove duplicate and sort array smallest to largest
//   let sorted = tempArray.filter(unique).sort((a, b) => a - b);
//   //   # since arrays start at 0 but that's not true for the answer, we subtract one from the position and return either the value from the array or 0
//   if (sorted[p - 1]) {
//     return sorted[p - 1];
//   } else {
//     return 0;
//   }
// }

// factors(22876792454961, 28);

// 1 ,2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

///////////////////////
// function arrangeWords(sentence) {
//   // remove period from sentence
//   let removed = sentence.replaceAll(".", "");

//   //make all words lowercase so we can count their char number //.split breaking each word into an item in an array, splitting on each space
//   let wordArray = removed.toLowerCase().split(" ");

//   // sort the words based on their lengths
//   let sortedWords = wordArray.sort((a, b) => a.length - b.length);

//   //Changing the first letter of the first word to be upper case
//   sortedWords[0] = sortedWords[0][0].toUpperCase() + sortedWords[0].slice(1);

//   // Join the array back into single string
//   let final = sortedWords.join(" ");

//   // // Return the final string BUT remember to add the "." at the end
//   return final + ".";
// }

// console.log(arrangeWords("Here i come"));

/////////////////////

function shortest(inputArr) {
  // create variable that is the length of the input array
  let result = [inputArr.length];
  // start a while loop that runs while the input array length is not equal to zero
  while (inputArr.length !== 0) {
    // set variable for the shortest stick, use the math min method to calculate the smallest stick of the input array
    let shortestStick = Math.min(...inputArr);
    // set variable that will ....
    // removing the shortest stick from the array
    // remove the length of the shorest stick from every element of the array
    let stickArr = inputArr.filter((a) => a !== shortestStick).map((el) => el - shortestStick);
    if (inputArr.length) {
      result.push(inputArr.length);
    }
    console.log(result);
    return result;
  }
}
shortest([4, 5, 6, 7]);
