// Caffeine Script

/*
Complete the function which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If one of the condition above is true and the integer is even, add "Script" to the end of the string.

If none of the condition is true, return the string "mocha_missing!"
*/

// Solution

function caffeineBuzz(n){
  if (n % 12 === 0) {
    return 'CoffeeScript'
  } else if (n % 6 === 0) {
    return 'JavaScript'
  } else if (n % 3 === 0){
    return 'Java'
  } else {
    return 'mocha_missing!'
  }
}