/*
 * Author:    Skye Crockett & Matthew Oropeza
 * Created:   3 November 2022
 * License: Public Domain
 */
var button = document.getElementById("my-button");

function sortUserName() {
  var inputValue = document.getElementById("userName").value;

  console.log("userName = ", inputValue);

  var nameArray = inputValue.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;

}
var output = document.getElementById("output");

button.addEventListener("click", function() {
  output.innerHTML = "<p id=name-results>" + sortUserName() + "</p>";
})
