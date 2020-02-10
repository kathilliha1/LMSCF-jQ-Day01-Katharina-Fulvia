/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
// $("*").css("background-color", "yellow");

// all p elements
// $("p").css("background-color","pink");

// the p element with an ID of "intro"
// $("#intro").css("background-color","limegreen");


// all elements with a class of "note"
// $(".note").css("background-color","yellow");

// all DIV elements with a class of note
// $("DIV.note").css("background-color","orange");


// all p elements in the article element
// $("article>p").css("background-color","aliceblue");


// the last element in any section which is a p tag
// $("p:last-of-type").css("background-color","red");

// the first paragraph on the page
// $("p:first").css("background-color","hotpink");

// all p elements which have a link
// $("[href]").css("background-color","green");


// the second li within nested ul element
// $("li ul li:nth-child(2)").css("background-color","deepskyblue");

// every second and third p element
$("p:nth-of-type(2),p:nth-of-type(3)").css("background-color","violet");