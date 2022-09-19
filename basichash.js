//1. Given a string, find the most commonly occurring letter.

//Input: “peter piper picked a peck of pickled peppers”
//Output: “p”

// function mostFrequentCharacter(string) {
//   var letterCounts = {};
//   var index = 0;
//   var mostFrequentLetter = "";
//   var mostFrequentCount = 0;
//   while (index < string.length) {
//     if (letterCounts[string[index]]) {
//       letterCounts[string[index]] += 1;
//     } else {
//       letterCounts[string[index]] = 1;
//     }
//     if (letterCounts[string[index]] > mostFrequentCount) {
//       mostFrequentCount = letterCounts[string[index]];
//       mostFrequentLetter = string[index];
//     }
//     index++;
//   }
//   console.log(letterCounts);
//   console.log(mostFrequentLetter);
//   return mostFrequentLetter;
// }
// mostFrequentCharacter("peter piper picked a peck of pickled peppers");

// 2. Given an array of strings, return a hash that provides of a count of how many times each string occurs.

//Input: ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]

//Output: {"Dewey" => 6, "Truman" => 5}

//Explanation: "Dewey" occurs 6 times in the array, while "Truman" occurs 5 times.

// function stringCounter(arrayOfStrings) {
//   var countOfStringsHash = {};
//   var index = 0;
//   while (index < arrayOfStrings.length) {
//     if (countOfStringsHash[arrayOfStrings[index]]) {
//       countOfStringsHash[arrayOfStrings[index]] += 1;
//     } else {
//       countOfStringsHash[arrayOfStrings[index]] = 1;
//     }
//     index++;
//   }
//   console.log(countOfStringsHash);
//   return countOfStringsHash;
// }
// stringCounter(["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]);

//3. Given a hash, where the keys are strings representing food items, and the values are numbers representing the price of each food, return the amount someone would pay if they'd order one of each food from the entire menu.

//Input: {"hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2}

//Output: 14

//Explanation: If someone would order one of everything on the menu, they'd pay a total of 14 (the sum of all the hash's values).

function menuPriceTotal(menuPrice) {
  var sum = 0;
}
menuPriceTotal({ hotdog: 2, hamburger: 3, steaksandwich: 5, fries: 1, coleslaw: 1, soda: 2 });

//4. Given an array of hashes that represent a list of social media posts, return a new array that only contains the posts that have at least 1000 likes.

// Input: [
//   {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
//   {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
//   {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
//   {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
//   ]

// Output: [
// {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
// {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
// ]

//5. Given a DNA strand, return its RNA complement (per RNA transcription).

// Both DNA and RNA strands are a sequence of nucleotides. Here we're representing the sequences with single-letter characters (e.g. a sample strand may look like: "AGCA".)

// Given a string representing a DNA strand, provide its transcribed RNA strand, according to the following pattern:

// G becomes C
// C becomes G
// T becomes A
// A becomes U

// So based on all this, here's a sample input/output:

// Input: 'ACGTGGTCTTAA'
// Output: 'UGCACCAGAAUU'

//6. Given an array of social media posts and a hash of users, return a list of posts (as an array of hashes) that replaces the submitted_by id number as the person's actual name.

// For example, given this array of posts (note that the submitted_by is an id number):

// [
// {title: 'Me Eating Pizza', submitted_by: 231, likes: 1549},
// {title: 'i never knew how cool i was until now', submitted_by: 989, likes: 3},
// {title: 'best selfie evar!!!', submitted_by: 111, likes: 1092},
// {title: 'Mondays are the worst', submitted_by: 403, likes: 644}
// ]

// And this hash of users (the key is the id number and the value is the user's real name):

// users = {403 => "Aunty Em", 231 => "Joelle P.", 989 => "Lyndon Johnson", 111 => "Patti Q."}

// Return the array of posts as follows:

// [
// {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
// {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
// {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
// {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
// ]

//7. Given two strings, return true if they are anagrams of each other, and false if they are not. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Do not use any built-in sort methods.

// Input: “silent”, “listen”
// Output: true

// Input: “frog”, “bear”
// Output: false
