/*
 * Author:    Skye Crockett & Matthew Oropeza
 * Created:   17 November 2022
 * License: Public Domain
 */
function fizzBuzz(){
  for (var num = 0; num<= 200; num++) {
    if (i%3 == 0) {
      oneLongString += num + " Fizz!<br>";
    } else if (i % 5 == 0) {
      oneLongString += num + " Buzz!<br>";
    } else if (i % 7 == 0) {
      oneLongString += num + " Boom!<br>";
    } else if ((i%3 == 0) && (i % 5 == 0)) {
      oneLongString += num + " FizzBuzz!<br>";
    } else if ((i%3 == 0) && (i % 7 == 0)) {
      oneLongString += num + " FizzBoom!<br>";
    } else if ((i % 5 == 0) && (i % 7 == 0)) {
      oneLongString += num + " BuzzBoom!<br>";
    } else if ((i%3 == 0) && (i % 5 == 0) && (i % 7 == 0)) {
      oneLongString += num + " FizzBuzzBoom!<br>";
    }
  }
})

$("#activate").click(function(){
  $("#output").append(oneLongString);
})
