/*
 * Author:    Skye Crockett & Matthew Oropeza
 * Created:   10 November 2022
 * License: Public Domain
 */

function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0){
    return "Gryffindor"
  }
  else if (mod == 1){
    return "Ravenclaw"
  }
  else if (mod == 2){
    return "Slytherin"
  }
  else if (mod == 3){
    return "Hufflepuff"
  }
}

$("#button").click(function() {
  var name = $("#input").val();
  var house = sortingHat(name);
  newText = "<p> The Sorting Hat has sorted you into " + house + "</p>";
  $("#output").html(newText);
})
