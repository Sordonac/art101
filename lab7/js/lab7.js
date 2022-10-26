/*
 * Author: Skye Crockett & Matthew Oropeza
 * Created: 25 October
 * License: Public Domain
 */
function sortUserName() {
   var userName = window.prompt("Hello! Please tell me your name so I can fix it.");
   console.log("userName = ", userName);

   var nameArray = userName.split('');
   console.log("nameArray =", nameArray);

   var nameArraySort = nameArray.sort();
   console.log("nameArraySort = ", nameArraySort);

   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);

   return nameSorted;
}

//Output
document.writeln("Hey, I've fixed your name: ", sortUserName(), "</br>");
