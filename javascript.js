console.log("sup?");

//fizzbuzz
// var output = [];
// var count = 1;

// function fizzbuzz() {
//   if (count % 3 === 0 && count % 5 === 0) {
//     output.push("Fizzbuzz");
//   } else if (count % 5 === 0) {
//     output.push("buzz");
//   } else if (count % 3 === 0) {
//     output.push("fizz");
//   } else {
//     output.push(count);
//   }
//   console.log(output);
//   count++;
// }
// console.log(output);

// 1. Use a variable to store a number, then write a condition that prints 0 if the number is equal to 10, and prints -1 otherwise.
// var number = 10;
// if (number === 10) {
//   console.log(0);
// } else {
//   console.log(-1);
// }

// 2. Use a variable to store a number, then write a condition that prints -1 if the number is less than 10, prints 1 if the number is greater than 10, and prints 0 if the number is equal to 10.
// var number = -10;
// if (number < 10) {
//   console.log(-1);
// } else if (number > 10) {
//   console.log(1);
// } else {
//   console.log(0);
// }

// 3. Use variables to store two numbers, then write a condition that prints 1 if the numbers are both less than 10, and prints 0 otherwise.
// var number1 = 13;
// var number2 = 17;
// if (number1 > 10 && number2 > 10) {
//   console.log("Both numbers are GREATER than 10");
// } else {
//   console.log("Both numbers are LESS than 10");
// }

// 4. Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.
// var number = 99999;
// if (number > 9000) {
//   console.log(-1);
// } else {
//   console.log("The number is less than 9000");
// }

// 5. Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).
// var number = 28;
// if (number < 10) {
//   console.log(9, "number is less than 10");
// } else if (number < 20) {
//   console.log(19, "number is less than 20");
// } else if (number < 30) {
//   console.log(29, "number is less than 30");
// } else {
//   console.log(-1, "number is bigger than 30");
// }

// 6. Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints -100 otherwise.

// var number1 = -50;
// var number2 = -9;
// if (number1 > 10 || number2 > 10) {
//   console.log(100, "one of these numbers is greater than 100");
// } else {
//   console.log(-100, "both numbers are less than 10");
// }

// 7. Use a variable to store a number, then write a condition that prints 1776 if the number is less than 0, and prints 1979 otherwise.
// var number = 8;
// if (number < 0) {
//   console.log(1776, "number is less than 0");
// } else {
//   console.log(1979, "number is greater than 0");
// }

// 8. Use a variable to store a number, then write a condition that prints 100 if the number equals 100, prints 99 if the number is equal to 99, and prints 0 otherwise.
// var number = 199;
// if (number === 100) {
//   console.log(100, "number is 100");
// } else if (number === 99) {
//   console.log(99, "number is 99");
// } else {
//   console.log(0, "number is not 100 or 99");
// }

// 9. Use variables to store two numbers, then write a condition that prints 1 if the first number is less than zero and the second number is greater than 0, and prints 0 otherwise.
// var number1 = -33;
// var number2 = 2;
// if (number1 < 0 && number2 > 0) {
//   console.log(1, "first number is less than zero, second number is greater than 0");
// } else {
//   console.log(0, "not true");
// }

// 10. Use a variable to store a number, then write a condition that prints 5 if the number is greater than 80, prints 4 if the number is greater than 60, prints 3 if the number is greater than 40, prints 2 if the number is greater than 20, and prints 1 otherwise (only one print statement should occur).

// var number = -99;
// if (number > 80) {
//   console.log(5, "number greater than 80");
// } else if (number > 60) {
//   console.log(4, "number greater than 60");
// } else if (number > 40) {
//   console.log(3, "number is greater than 40");
// } else if (number > 20) {
//   console.log(2, "number is greater than 20");
// } else {
//   console.log(1, "number is less than 20");
// }

// # 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).
// var firstName = "Grace";
// var lastName = "Hopper";
// console.log(firstName + " " + lastName);

// 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the ${} operator).
// var firstName = "Coco";
// var lastName = "Rosie";
// console.log(`${firstName} ${lastName}`);

// 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".
// var word = window.prompt("Enter a word:");
// if (word === "marco") {
//   console.log("polo");
// } else {
//   console.log("ok.");
// }
// 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).
// var color1 = "pink";
// var color2 = "green";
// var color3 = "red";
// console.log(color1 + " " + color2 + " " + color3);

// 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the ${} operator).
// var color1 = "green";
// var color2 = "purple";
// var color3 = "black";
// console.log(`${color1} ${color2} ${color3}`);

// 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."
// var name = window.prompt("Enter a name");
// if (name === "Santa" || name === "santa") {
//   console.log("hey santa");
// } else {
//   console.log("you're not Santa");
// }

// 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).
// var bookTitle = "Circe";
// var bookAuthor = "Madeline Miller";
// console.log("A book I like is " + bookTitle + " by " + bookAuthor + ".");

// 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the ${} operator).
// var bookTitle = "Circe";
// var bookAuthor = "Madeline Miller";
// console.log(`A book I like is ${bookTitle} by ${bookAuthor}.`);

// 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"
// var password = window.prompt("Enter the password");
// if (password === "Joshua") {
//   console.log("shall we play a game?");
// } else {
//   alert("access denied");
// }

// 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).
// var city1 = "Chicago";
// var city2 = "Naperville";
// var city3 = "Skokie";
// console.log("This sentence is so painful to write out: " + city1 + ", " + city2 + ", " + city3 + ".");

// use parseInt(number) if window.prompt is asking for a number:

// 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.
// var word = window.prompt("Enter a word:");
// console.log(word.toUpperCase());

// 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.
// var number = window.prompt("Enter a number");
// if (parseInt(number) >= 100) {
//   console.log("It is a big number");
// } else {
//   console.log("That number is smaller");
// }

// // 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.
// var number1 = window.prompt("Enter a number");
// var number2 = window.prompt("Enter a second number");
// console.log(parseInt(number1) + parseInt(number2));

// 4. Write a program that asks the user to enter a word, then prints that word in reverse order.
// var word = window.prompt("Enter a word:");
// console.log(word.split("").reverse().join(""));

// 5. Write a program that asks the user to enter a number, then prints the number times 10.
// var number = window.prompt("Enter a number");
// console.log(parseInt(number * 10));

// 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.
// var word1 = window.prompt("Enter a word");
// var word2 = window.prompt("Enter a word");
// console.log(word1.toUpperCase() + " " + word2.toUpperCase());

// 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.
// var word = window.prompt("Enter a word");
// console.log(word.length);

// 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.
// var number = window.prompt("Enter a number");
// if (number < 0) {
//   console.log("That is a negative number");
// } else {
//   console.log("That is a positive number");
// }

// 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.
// var word1 = window.prompt("Enter a number");
// var word2 = window.prompt("Enter another number");
// console.log(parseInt(word1) * parseInt(word2));

// 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.
// var word = window.prompt("Enter a word");
// if (word.length > 5) {
//   console.log("That is a long word");
// } else {
//   console.log("cool");
// }

// 1. Write a while loop to print the numbers 1 through 10.

// var number = 1;
// while (number <= 10) {
//   console.log(number);
//   number += 1;
// }

// 2. Write a while loop that prints the word "hello" 5 times.
// var index = 0;
// while (index < 5) {
//   console.log("hello");
//   index += 1;
// }

// 3. Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".
// while (true) {
//   var word = window.prompt("Enter a word:");
//   if (word === "stop") {
//     break;
//   }
// }

// 4. Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.
// var number = 0;
// while (number <= 100) {
//   console.log(number);
//   number += 5;
// }

// 5. Write a while loop that prints the number 9000 ten times.
// var number = 9000;
// var count = 0;
// while (count < 10) {
//   console.log(number);
//   count += 1;
// }

// 6. Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

// while (true) {
//   var number = window.prompt("Enter a number");
//   if (parseInt(number) > 10) {
//     break;
//   }
// }

// 7. Write a while loop that prints the numbers 50 to 70.
// var number = 50;
// while (number <= 70) {
//   console.log(number);
//   number += 1;
// }

// 8. Write a while loop that prints the phrase "Around the world" 144 times.
// var count = 0;
// while (count < 144) {
//   console.log("Around the world.");
//   count += 1;
// }

// 9. Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

// while (true) {
//   var word = window.prompt("Enter a word");
//   if (word.length > 5) {
//     break;
//   }
// }

// 10. Write a while loop that prints the even numbers from 2 to 40.
// var number = 2;
// while (number <= 40) {
//   console.log(number);
//   number += 2;
// }

// 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

// var words = ["cool", "dude", "fine"];
// words.push("ok", "yes");
// console.log(words);

// 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

// var lettersArray = ["o", "l", "k", "z"];
// lettersArray[1] = 33;
// console.log(lettersArray);

// 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

// var numbers = [3, 4, 5, 5, 6];
// var index = 0;
// while (index < numbers.length) {
//   console.log(numbers[index]);
//   index += 1;
// }

// 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

// var number = [3];
// number.push(3, 4, 5, 6);
// console.log(number);

// 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.
// var strings = ["mint", "rosemary", "basil"];
// strings[2].toUpperCase();
// console.log(strings);

// 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.

// var names = ["Mo", "Bo", "Jo"];
// var index = 0;
// while (index < names.length) {
//   console.log(names[index]);
//   index += 1;
// }

// 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.
// var stringArray = ["baby", "tiny"];
// stringArray.push("puppy");
// console.log(stringArray);

// 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

// var numbers = [45, 6, 7, 8, 8];
// numbers[0] = numbers[0] * 10;
// console.log(numbers);

// 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

// var numbers = [44, 43];
// var index = 0;
// while (index < numbers.length) {
//   console.log(numbers[index]);
//   index++;
// }

// 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.

// var countries = ["Canada", "USA", "Mexico"];
// countries.push("Ireland");
// console.log(countries);

// 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.
// var person = { firstName: "Mike", lastName: "Boss", email: "mboss@email.com" };
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.email);

//2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.
// var people = [
//   { firstName: "M", lastName: "Bean" },
//   { firstName: "L", lastName: "Cake" },
//   { firstName: "P", lastName: "Moon" },
// ];
// console.log(people[0]);

// 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.
// var menu = { burger: 3, icecream: 3, taco: 3 };
// menu["salad"] = 3; //add in key and set it equal to value
// console.log(menu);

// 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.
// var book = { title: "ok", author: "someone", pages: 3444, language: "English" };
// console.log(book["title"]);
// console.log(book["author"]);
// console.log(book["pages"]);
// console.log(book["language"]);

// 5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.
// var books = [
//   { title: "book1", author: "author1" },
//   { title: "book2", author: "author2" },
//   { title: "book3", author: "author3" },
// ];
// console.log(books[2]["author"]);

// 6. Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.
// var places = { state1: "capital1", state2: "capital2", state3: "capital3" };
// places["state4"] = "capital4";
// console.log(places);

// 7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.
// var computer = { brand: "i", model: "don't", year: "give a F" };
// console.log(computer["brand"]);
// console.log(computer["model"]);
// console.log(computer["year"]);

// 8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.
// var laptops = [
//   {brand: "brand1", model: "model1"},
//   {brand: "brand2", model: "model2"},
//   {brand: "brand3", model: "model3"}
// ];
// console.log(laptops[1]["model"]);

// 9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.
// var dictionary = {word1: "definition1", word2: "definition2"};
// dictionary["word3"] = "definition3";
// console.log(dictionary);

// 10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.
// var shirt = {brand: "a shirt brand", color: "red", size: "XL"};
// console.log(shirt["brand"]);
// console.log(shirt["color"]);
// console.log(shirt["size"]);

// 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.

// function timesTwo(number) {
//   return number * 2;
// }
// console.log(timesTwo(4));

// 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.
// function capitalizeIt(string) {
//   return string.toUpperCase();
// }
// console.log(capitalizeIt("frog"));

// 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.
// function firstSubtractedBySecond(number1, number2) {
//   return number2 - number1;
// }
// console.log(firstSubtractedBySecond(6, 10));

// 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.

// function numberTimesItself(number) {
//   return number * number;
// }
// console.log(numberTimesItself(9));

// 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.
// function firstLetter(string) {
//   return string[0];
// }
// console.log(firstLetter("done"));

// 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.
// function combineStrings(string1, string2, string3) {
//   return string1 + string2 + string3;
// }
// console.log(combineStrings("ok", "no", "do"));

// 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.
// function turnIntoString(number) {
//   return number.toString();
// }
// console.log(turnIntoString(9));

// 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.
// function repeatFiveTimes(string) {
//   return string + string + string + string + string;
// }
// console.log(repeatFiveTimes("dog"));

// 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.
// function findAverage(number1, number2, number3) {
//   return (number1 + number2 + number3) / 3.0;
// }
// console.log(findAverage(20, 12, 20));

// 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.
// function timesAndPlusThirty(number) {
//   return number * 10 + 30;
// }
// console.log(timesAndPlusThirty(7));

//-----------------------------------------while loops-------------------------------------
//  1. Start with an array of numbers and create a new array with each number times 3.    For example, [1, 2, 3] becomes [3, 6, 9].
// var numbers = [1, 2, 3];
// var index = 0;
// var timesThree = [];
// while (index < numbers.length) {
//   timesThree.push(numbers[index] * 3);
//   index += 1;
// }
// console.log(timesThree);

//  2. Start with an array of strings and create a new array with each string upcased.For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].
// var arrayOfStrings = ["hello", "goodbye"];
// var index = 0;
// var capitalized = [];
// while (index < arrayOfStrings.length) {
//   capitalized.push(arrayOfStrings[index].toUpperCase());
//   index += 1;
// }
// console.log(capitalized);

//  3. Start with an array of hashes and create a new array of string values from each hash's :name key.    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].
// var peopleArray = [
//   { name: "Alice", age: 27 },
//   { name: "Blane", age: 16 },
// ];
// var justName = [];
// var index = 0;
// while (index < peopleArray.length) {
//   justName.push(peopleArray[index]["name"]);
//   index += 1;
// }
// console.log(justName);

// 4. Start with an array of numbers and create a new array with each number plus 7.    For example, [1, 2, 3] becomes [8, 9, 10].
// var numberArray = [1, 2, 3];
// var plusSeven = [];
// var index = 0;
// while (index < numberArray.length) {
//   plusSeven.push(numberArray[index] + 7);
//   index += 1;
// }
// console.log(plusSeven);

//  5. Start with an array of strings and create a new array with each string's length.     For example, ["hello", "goodbye"] becomes [5, 7].
// var strings = ["hello", "goodbye"];
// var stringLength = [];
// var index = 0;
// while (index < strings.length) {
//   stringLength.push(strings[index].length);
//   index += 1;
// }
// console.log(stringLength);

//  6. Start with an array of hashes and create a new array of number values from each hash's :age key. For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].
// var arrayOfHashes = [
//   { name: "Alice", age: 27 },
//   { name: "Blane", age: 16 },
// ];
// var arrayAgeKey = [];
// var index = 0;
// while (index < arrayOfHashes.length) {
//   arrayAgeKey.push(arrayOfHashes[index]["age"]);
//   index += 1;
// }
// console.log(arrayAgeKey);

//  7. Start with an array of numbers and create a new array with each number divided by 2.     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].
// var wholeNumbers = [1, 2, 3];
// var dividedByTwo = [];
// var index = 0;
// while (index < wholeNumbers.length) {
//   dividedByTwo.push(wholeNumbers[index] / 2);
//   index += 1;
// }
// console.log(dividedByTwo);

//  8. Start with an array of strings and create a new array with each string's first letter only. For example, ["hello", "goodbye"] becomes ["h", "g"].
// var arrayOfStrings = ["hello", "goodbye"];
// var firstLetter = [];
// var index = 0;
// while (index < arrayOfStrings.length) {
//   firstLetter.push(arrayOfStrings[index][0]);
//   index += 1;
// }
// console.log(firstLetter);

// 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2. For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].
// var arrayOfPeople = [
//   { name: "Alice", age: 27 },
//   { name: "Blane", age: 16 },
// ];
// var ageTimesTwo = [];
// var index = 0;
// while (index < arrayOfPeople.length) {
//   ageTimesTwo.push(arrayOfPeople[index]["age"] * 2);
//   index++;
// }
// console.log(ageTimesTwo);

// 10. Start with an array of numbers and create a new array with each number converted into a string. For example, [1, 2, 3] becomes ["1", "2", "3"].

// var arrayOfNumbers = [1, 2, 3];
// var intoString = [];
// var index = 0;
// while (index < arrayOfNumbers.length) {
//   intoString.push(arrayOfNumbers[index].toString());
//   index++;
// }
// console.log(intoString);

//-----------------------------------------each -------------------------------------
//  1. Start with an array of numbers and create a new array with each number times 3.    For example, [1, 2, 3] becomes [3, 6, 9].

//  2. Start with an array of strings and create a new array with each string upcased.For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

//  3. Start with an array of hashes and create a new array of string values from each hash's :name key.    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

// 4. Start with an array of numbers and create a new array with each number plus 7.    For example, [1, 2, 3] becomes [8, 9, 10].

//  5. Start with an array of strings and create a new array with each string's length.     For example, ["hello", "goodbye"] becomes [5, 7].

//  6. Start with an array of hashes and create a new array of number values from each hash's :age key.     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

//  7. Start with an array of numbers and create a new array with each number divided by 2.     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

//  8. Start with an array of strings and create a new array with each string's first letter only.    For example, ["hello", "goodbye"] becomes ["h", "g"].

// 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// 10. Start with an array of numbers and create a new array with each number converted into a string.     For example, [1, 2, 3] becomes ["1", "2", "3"].

//-----------------------------------------map shortcut-------------------------------------
//  1. Start with an array of numbers and create a new array with each number times 3.    For example, [1, 2, 3] becomes [3, 6, 9].

//  2. Start with an array of strings and create a new array with each string upcased.For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

//  3. Start with an array of hashes and create a new array of string values from each hash's :name key.    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

// 4. Start with an array of numbers and create a new array with each number plus 7.    For example, [1, 2, 3] becomes [8, 9, 10].

//  5. Start with an array of strings and create a new array with each string's length.     For example, ["hello", "goodbye"] becomes [5, 7].

//  6. Start with an array of hashes and create a new array of number values from each hash's :age key.     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

//  7. Start with an array of numbers and create a new array with each number divided by 2.     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

//  8. Start with an array of strings and create a new array with each string's first letter only.    For example, ["hello", "goodbye"] becomes ["h", "g"].

// 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// 10. Start with an array of numbers and create a new array with each number converted into a string.     For example, [1, 2, 3] becomes ["1", "2", "3"].

// SELECT ITEMS FROM AN ARRAY INTO A NEW ARRAY WITH ITEMS THAT MATCH A CERTAIN CONDITION

//  1. Start with an array of numbers and create a new array with only the numbers less than 20.For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].
// var arrayOfNumbers = [2, 32, 80, 18, 12, 3];
// var lessThanTwenty = [];
// var index = 0;
// while (index < arrayOfNumbers.length) {
//   if (arrayOfNumbers[index] < 20) {
//     lessThanTwenty.push(arrayOfNumbers[index]);
//   }
//   index += 1;
// }
// console.log(lessThanTwenty);

// 2. Start with an array of strings and create a new array with only the strings that start with the letter "w".For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].
// var arrayOfStrings = ["winner", "winner", "chicken", "dinner"];
// var wWords = [];
// var index = 0;
// while (index < arrayOfStrings.length) {
//   if (arrayOfStrings[index][0] === "w") {
//     wWords.push(arrayOfStrings[index]);
//   }
//   index += 1;
// }
// console.log(wWords);

// 3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].
// var arrayOfHashes = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var pricesMoreThanFive = [];
// var index = 0;
// while (index < arrayOfHashes.length) {
//   if (arrayOfHashes[index]["price"] > 5) {
//     pricesMoreThanFive.push(arrayOfHashes[index]);
//   }
//   index += 1;
// }
// console.log(pricesMoreThanFive);

// 4. Start with an array of numbers and create a new array with only the even numbers.For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].
// var arrayOfNumbers = [2, 4, 5, 1, 8, 9, 7];
// var justEvenNumbers = [];
// var index = 0;
// while (index < arrayOfNumbers.length) {
//   if (arrayOfNumbers[index] % 2 === 0) {
//     justEvenNumbers.push(arrayOfNumbers[index]);
//   }
//   index += 1;
// }
// console.log(justEvenNumbers);

// 5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].
// var arrayOfStrings = ["a", "man", "a", "plan", "a", "canal", "panama"];
// var shorterThanFour = [];
// var index = 0;
// while (index < arrayOfStrings.length) {
//   if (arrayOfStrings[index].length < 4) {
//     shorterThanFour.push(arrayOfStrings[index]);
//   }
//   index += 1;
// }
// console.log(shorterThanFour);

// 6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key) For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].
// var arrayOfHashes = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var nameLessThanSix = [];
// var index = 0;
// while (index < arrayOfHashes.length) {
//   if (arrayOfHashes[index]["name"].length < 6) {
//     nameLessThanSix.push(arrayOfHashes[index]);
//   }
//   index++;
// }
// console.log(nameLessThanSix);

// 7. Start with an array of numbers and create a new array with only the numbers less than 10.For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].
// var arrayOfHashes = [8, 23, 0, 44, 1980, 3];
// var numbersLessThanTen = [];
// var index = 0;
// while (index < arrayOfHashes.length) {
//   if (arrayOfHashes[index] < 10) {
//     numbersLessThanTen.push(arrayOfHashes[index]);
//   }
//   index++;
// }
// console.log(numbersLessThanTen);

// 8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b". For example, ["big", "little", "good", "bad"] becomes ["little", "good"].
// var arrayOfStrings = ["big", "little", "good", "bad"];
// var notBStart = [];
// var index = 0;
// while (index < arrayOfStrings.length) {
//   if (arrayOfStrings[index][0] !== "b") {
//     notBStart.push(arrayOfStrings[index]);
//   }
//   index++;
// }
// console.log(notBStart);

//  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key). For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].
// var arrayOfHashes = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var pricesLessThanTen = [];
// var index = 0;
// while (index < arrayOfHashes.length) {
//   if (arrayOfHashes[index]["price"] < 10) {
//     pricesLessThanTen.push(arrayOfHashes[index]);
//   }
//   index++;
// }
// console.log(pricesLessThanTen);

// 10. Start with an array of numbers and create a new array with only the odd numbers. For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

// var arrayOfNumbers = [2, 4, 5, 1, 8, 9, 7];
// var oddNumbers = [];
// var index = 0;
// while (index < arrayOfNumbers.length) {
//   if (arrayOfNumbers[index] % 2 !== 0) {
//     oddNumbers.push(arrayOfNumbers[index]);
//   }
//   index++;
// }
// console.log(oddNumbers);

//reduce array into single value based on some compution---------------------------------
// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

// function getSum(numbersArray) {
//   var sum = 0;
//   var index = 0;
//   while (index < numbersArray.length) {
//     sum += numbersArray[index];
//     index++;
//   }
//   console.log(sum);
// }
// getSum([5, 10, 8, 3]);

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

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

//converting data------------------------------------------------------------------------
// #  1. Convert an array of arrays into a hash.
// #     For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.
// set up variable for array of arrays
// var pairs = [
//   [1, 3],
//   [8, 9],
//   [2, 16],
// ];
// // set up empty hash variable
// var pairsObject = {};
// // set up index variable
// var index = 0;
// // while loop to iterate through the pairs array of arrays
// while (index < pairs.length) {
//   // set variable for the keys (1, 8, 2)
//   var key = pairs[index][0];
//   // set up variable for the values (3, 9, 6)
//   var value = pairs[index][1];
//   // set the empty hash to represent keys than equal value
//   pairsObject[key] = value;
//   // iterate through the loop by 1 each time
//   index = index + 1;
// }
// console.log(pairsObject);

// #  2. Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// #     For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.
// variable for the array of hashes
// var items = [
//   { id: 1, color: "blue", price: 32 },
//   { id: 2, color: "red", price: 12 },
// ];
// // empty hash for result
// var itemsObject = {};
// // set index variable to 0
// var index = 0;
// // start while loop to iterate through each element in items array hashes
// while (index < items.length) {
//   // set itemsObject hash to the items id key
//   itemsObject[items[index].id] = items[index];
//   // increase index by 1 each time
//   index += 1;
// }
// console.log(itemsObject);

// #  3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// #     For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

// #  4. Convert a hash into an array of arrays.
// #     For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

// #  5. Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// #     For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

// #  6. Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// #     For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

// #  7. Convert a hash into a flat array containing all the hash’s keys and values.
// #     For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].
// let originalHash = { a: 1, b: 2, c: 3, d: 4 };
// let flatArray = [];
// let index = 0;
// while (index < originalHash.length) {
//   flatArray = originalHash[index];
//   index++;
// }
// console.log(flatArray);

// #  8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// #     For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

// #  9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// #     For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

// # 10. Given a hash, create a new hash that has the keys and values switched.
// #     For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.

//nested loops --------------------------------------------------------------------------
// #  1. Use a nested loop to convert an array of number pairs into a single flattened array.
// #     For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].
// set up variable for original array of arrays
// var numberPairs = [
//   [1, 3],
//   [8, 9],
//   [2, 16],
// ];
// // set up an empty variable to eventually hold the flattenedNumbers
// var flattenedNumbers = [];
// // create first index to iterate over the original array
// var index1 = 0;
// // while loop over original array of arrays
// while (index1 < numberPairs.length) {
//   // set up a variable for the 3 arrays within the original array
//   var numberPairArray = numberPairs[index1];
//   // doing a check, this pulls the 3 little arrays
//   console.log(numberPairs[index1]);
//   // set up next index that will iterate through the arrays within the original array
//   var index2 = 0;
//   // set up the next while loop to iterate through the little arrays
//   while (index2 < numberPairArray.length) {
//     // set up new variable that will just pull each individual value from these arrays
//     var number = numberPairArray[index2];
//     //just checking
//     console.log(numberPairArray[index2]);
//     // push the indiviual values into the flattenNumbers array
//     flattenedNumbers.push(number);
//     // increase index to avoid infinite loop and finish iteration
//     index2++;
//   }
//   // remember to increase orginal index
//   index1++;
// }
// console.log(flattenedNumbers);

// #  2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// #     For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

// variable for inputs
// let inputArray1 = ["a", "b", "c"];
// let inputArray2 = ["d", "e", "f", "g"];
// // variable for the result
// let result = [];
// let index1 = 0;
// // while loop, index1
// while (index1 < inputArray1.length) {
//   // while loop, index2
//   let index2 = 0;
//   while (index2 < inputArray2.length) {
//     // adding the each index from first array to every index of the second array
//     // console.log(inputArray1[index1]);
//     // console.log(inputArray2[index2]);
//     // shovel into the result

//     result.push(inputArray1[index1] + inputArray2[index2]);
//     index2++;
//   }
//   index1++;
// }

// console.log(result);

// #  3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// #     For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

// set up variable for original array, arrayOfStrings
// let arrayOfStrings = ["a", "b", "c", "d"];
// // set an empty variable for the result and I wanna call that stringCombinations
// let stringCombinations = [];
// // set up variable for first index, index1
// let index1 = 0;
// // do first while loop that iterates over the arrayOfStrings
// while (index1 < arrayOfStrings.length) {
//   // set up index2 to iterate through same loop again, set it to 0, iterate by 2, to grab every other letter
//   let index2 = 0;
//   while (index2 < arrayOfStrings.length) {
// add arrayOfStrings[index1] to arrayOfStrings[index2] push all of this into my stringCombinations variable
// if conditional to make sure that there is no aa, bb, cc, dd
//     if (arrayOfStrings[index1] !== arrayOfStrings[index2]) {
//       stringCombinations.push(arrayOfStrings[index1] + arrayOfStrings[index2]);
//     }
//     // MAKE sure that index2 is increased by 2 each time
//     index2 += 1;
//   }
//   // remember to increase index1 by 1 each time it runs through the loop
//   index1++;
// }
// // check it
// console.log(stringCombinations);

// #  4. Use a nested loop to find the largest product of any two different numbers within a given array.
// #     For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

// set up a variable for orginal array called numbers
// set up a variable for result called largestProduct
// set up first index, index1
// create while loop

// #  5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// #     For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

let numbersArray = [
  [1, 3],
  [8, 9],
  [2, 16],
];
let sumOfNumbers = 0;
let index1 = 0;
while (index1 < numbersArray.length) {
  let numberPair = numbersArray[index1];
  let index2 = 0;
  while (index2 < numberPair.length) {
    sumOfNumbers += numberPair[index2];
    index2++;
  }
  index1++;
}
console.log(sumOfNumbers);

// #  6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// #     For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

// #  7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// #     For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

// #  8. Use a nested loop to find the largest sum of any two different numbers within an array.
// #     For example, [1, 8, 3, 10] becomes 18.

// #  9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// #     For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

// # 10. Use a nested loop to convert an array of string arrays into a single string.
// #     For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".
