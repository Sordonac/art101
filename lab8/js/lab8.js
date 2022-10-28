/*
 * Author: Skye Crockett & Matthew Oropeza
 * Created: 27 October
 * License: Public Domain
 */

function isOdd(x){
  return (x % 2 == 1);
}

//test function
console.log("Is 1 odd?", isOdd(1));
console.log("Is 2 odd?", isOdd(2));

array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array: ", array);

var result = array.map(isOdd);
//returns [false, true, false, false, false, false, false]
console.log("Test of evenness of arrays: ", result);

var result = array.map(function(x){
  return x ** 0.5;
})

//should return [10, 9, 2, 4, 6.48074069840786, 12, 100]
console.log("Squareroot of array: ", result);
