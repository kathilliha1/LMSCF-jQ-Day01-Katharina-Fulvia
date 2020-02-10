/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
// $("*").css("background-color", "yellow");

// all p elements
// $("p").css("background-color","green");

// // the p element with an ID of "intro"
// $("#intro").css("background-color", "yellow");

// all elements with a class of "note"
// $(".note").css("background-color", "brown");

// all DIV elements with a class of note
// $("div.note").css("background-color", "orange");

// all p elements in the article element
// $("article p").css("background-color", "orange");

// the last element in any section which is a p tag
// $("p:last-of-type").css("background-color", "orange");

// the first paragraph on the page
// $("p:first").css("background-color", "orange");

// all p elements which have a link
// $("p a").css("background-color", "orange");

// the second li within nested ul element
// $("li ul li:nth-child(2)").css("background-color", "orange");

// every second and third p element
$("p:nth-of-type(2), p:nth-of-type(3)").css("background-color", "orange");
