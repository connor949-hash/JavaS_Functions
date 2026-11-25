// TODO: Create a function called ‘multiply’ that will take in 3 parameter andmultiplyall 3 numbers together. Note: The argument passed must NOT be the same number. 
function multiply(a,b,c) {
    return a * b * c    
}
// TODO: Create a function expression called ‘convertToSeconds’ that takes inanumber of minutes as an argument and returns the amount in seconds. ***Donotuse a console.log() inside of the function***
console.log (multiply(2, 2, 5));

// TODO: Create a function called fahrenheitToCelsius that takes the temperatureasan parameter and returns the equivalent temperature in Celsius. ***Do not useaconsole.log() inside of the function***
function fahrenheitToCelsius(f) {
    return c =((f) - 32) * 5/9
    
}
// TODO: Create a function that takes a string as a parameter and returns thereverseof the string. ***Do not use a console.log() inside of the function ***
console.log(fahrenheitToCelsius(37));
// TODO: Create a function that takes in a string and returns the number of Vowelsinthe sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not useaconsole.log() inside of the function***
function Vowelsinthe(str) {
  const matches = str.match(/[aeiou]/gi);
  //g is for global and i is for ignore case (gi) to find ALL matches in the string and treat uppercase and lowercase the same
  return matches ? matches.length : 0;
  // If matches is an array, return how many vowels it holds; if it's null (no vowels), return 0
}

console.log(Vowelsinthe('Character'))

// TODO: Create a “isPrime” function that takes a number as a parameter andreturnstrue if the number is prime, and false otherwise. Make sure to test your codewith4numbers
function isprime(numbers) {
  if (numbers < 2) return false;
  for (let l = 2; l <= Math.sqrt(numbers); l++) {
    if (numbers % l === 0) return false; 
  }

     return true;
}
console.log(isprime(6))  
console.log(isprime(7))  
console.log(isprime(9))  
console.log(isprime(11))  
