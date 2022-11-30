/*
 * Author:    Skye Crockett & Matthew Oropeza
 * Created:   8 November 2022
 * License: Public Domain
 */

$("#challenges").click(function(){
  alert("We had trouble understanding how to use jQuery correctly.");
});

$("#results").click(function(){
  alert("When clicking on these buttons, these are our results.");
});

$("button.blue").click(function(){
  $("#special").removeClass("orange");
	$("#special").toggleClass("blue")
});

$("button.orange").click(function(){
  $("#special").removeClass("blue");
	$("#special").toggleClass("orange");
});
