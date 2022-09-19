//1. Write a function that returns whether a given number is a prime number.
//A prime number is a whole number greater than 1 whose only factors are 1 and itself.

// function isPrime(number) {
//   if (number < 2) {
//     return false;
//   }

//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(54));
// console.log(isPrime(33));
// console.log(isPrime(7));

//2.Write a function that prints out every number from 1 to N, with the following exceptions:

// If the number is divisible by 3, print out "FIZZ".
// If the number is divisible by 5, print out "BUZZ".
// If the number is divisible by both 3 and 5, print out "FIZZBUZZ".

//3.Write a function that gives the Nth number of the Fibonacci Sequence. The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. So the sequence goes like this:
// 1, 1, 2
// x, y, next

function fib(number) {
  let x = 1;
  let y = 1;
  let count = 3;
  let next = x + y;
  while (count <= next) {
    let next = x + y;
    let x = y;
    let y = next;
    count++;
  }
  console.log(next);
  return next;
}
fib(6);
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

// Input: 9
// Output: 21 (as this is the 9th number of the Fibonacci Sequence)

//4. Given a year, report if it is a leap year.

// function leapYear(year) {
//   if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     console.log("leap year");
//   } else {
//     console.log("not a leap year");
//   }
// }
// leapYear(2000);

// on every year that is evenly divisible by 4
// except every year that is evenly divisible by 100
// unless the year is also evenly divisible by 400
// For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

//5.
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

//6. The Collatz Conjecture or 3x+1 problem can be summarized as follows:

// Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

// Given a number n, return the number of steps required to reach 1.

// Examples
// Starting with n = 12, the steps would be as follows:

// 12
// 6
// 3
// 10
// 5
// 16
// 8
// 4
// 2
// 1

// Resulting in 9 steps. So for input n = 12, the return value would be 9.

//7. A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.
