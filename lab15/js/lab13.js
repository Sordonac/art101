/*
 * Author:    Skye Crockett & Matthew Oropeza
 * Created:   17 November 2022
 * License: Public Domain
 */
function fizzBuzz(){
  for (i=1; i<= 200; i++) {
    if (i%3 == 0) {
      console.log("Fizz!");
    } else if (i % 5 == 0) {
      console.log("Buzz!");
    } else if (i % 7 == 0) {
      console.log("Boom!");
    } else if (i%3 == 0) || (i % 5 == 0) {
      console.log("FizzBuzz!");
    } else if (i%3 == 0) || (i % 7 == 0) {
      console.log("FizzBoom!");
    } else if (i % 5 == 0) || (i % 7 == 0) {
      console.log("BuzzBoom!");
    } else if (i%3 == 0) || (i % 5 == 0) || (i % 7 == 0) {
      console.log("FizzBuzzBoom!");
    }
  }
}
