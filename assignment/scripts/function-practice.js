console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return ' Hello, ' + name;
}
// Remember to call the function to test

console.log(helloName('joe'));


// 3. Function to add two numbers together & return the result

function addNumbers( firstNumber, secondNumber ) {
   return  firstNumber + secondNumber;
}
let numbersAdded = addNumbers(8, 10)
console.log('I have added two numbers(8 & 10):', numbersAdded);


// 4. Function to multiply three numbers & return the result

function multiplyThree(number1, number2, number3 ){
  return number1 * number2 * number3;

}
let numbersMultiplied = multiplyThree(3, 5, 10);
console.log('I have multiplied three numbers(3, 5, 10:', numbersMultiplied);


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise

function isPositive( number ) {
  if ( number > 0 ){
    return true; 
  } else {
    return false;
  }
   
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

console.log( 'isPositive - should say true', isPositive(3) );

console.log( 'isPositive - should say false', isPositive(0) );

console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
 

const emptyArray = [];
const array3 = [2, 5, 9];

  function getLast(array) {
    
    if (array.length === 0) {
      return undefined;
    } else {
      return array[array.length - 1];
    }
 }
 const lastItem = getLast(emptyArray);
 const finalitem = getLast(array3);
 console.log('The return of the last value is',lastItem, '', 'because the array is empty');
 console.log('The return of the last value is',finalitem, '', 'because the array has avalue');



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

const myArray2 = [5, 7, 9];
let value = 7;
let found = find(value, myArray2)

 console.log('The variable value  is 7 and checks that number in the array, if it finds it returns:', found);

function find( value, array ){
  for(let i = 0; i<array.length; i++ ) {
    if (array[i] === value ) {
      return true;
    } else {
      
    }
  }
  return false;
}



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return string.charAt(0) === letter;

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

