/*
 * Author:    Skye Crockett & Matthew Oropeza
 * Created:   1 November 2022
 * License: Public Domain
 */

var outputEl = document.getElementById("output");

var new1El = document.createElement("p");
new1El.innerHTML = "something new";

var new2El = document.createElement("p");
new2El.innerHTML = "something else";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.color = "purple";
new2El.style.color = "orange";
