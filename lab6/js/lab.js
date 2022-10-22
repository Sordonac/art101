/*
 * Author: Skye Crockett & Matthew Oropeza
 * Created: 21 October
 * License: Public Domain
 */

 // Define variables
 myTransport = ["Volkswagen Rabbit ", "Metro Bus ","Loop Bus ","Bicycle "];

 myMainRide = {
   make : "Volkswagen",
   model : "Rabbit",
   color : "Black",
   year : 2008,
   age : function(){
     return 2022 - year;
   }
 }

 //Output
 document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
 document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
