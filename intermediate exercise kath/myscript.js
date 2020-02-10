$("form").submit(function(e) {

	e.preventDefault();
	
	$("form").remove();

});

var newItem = $("<div> first </div> <div> second </div> <div> third </div> <div> fourth </div> <div> fifth </div> "); 
            $('form').append(newItem);


$("input").removeAttr("value");
$("input").val("search for");


// Add a class name of "box" to each new DIV

$("div").toggleClass("Box");

//change the link to "www.codefactory.wien"

$("a").attr("href", "http://www.codefactory.wien/");

