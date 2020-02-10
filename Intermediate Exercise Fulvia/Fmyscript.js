$("form").submit(function(e) {

	e.preventDefault();

$("form").remove();

	
});


// .append(function() {

// var text = "";

for (i = 0; i < 5; i++) {
  $("article").append("<div class='box'></div>");
}

// $("article").append(text);

/*	 document.write(text);*/

// });

$("form > input").val("Search for..");

$("footer > p > a").attr("href","www.codefactory.wien");



// Remove the form from the page
// Create 5 new DIVs in the article element
// Within the input field change the value to "Search for..."
// Add a class name of "box" to each new DIV
// Change the link to "www.codefactory.wien"