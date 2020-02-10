$("a").attr("href", "http://www.codefactory.wien");
$("code").css("color", "red");
$("ol li").css("background-color", "#2a7b90");
$("label:last-of-type").text("Express your opinion");
$("img").attr("src","https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg");

$("blockquote").css(
   {
       "background-color":"orange",
       "font-style": "italic"
   });

$("#logo").css("color", "black");
$(".gray").css("color", "white");

$(".date").css("display", "none");

// 8. Remove the "Oct 01, 2006" Date from the page
$(".sidemenu").append("<li><a href=\"#NewTemplates\"><span>New Templates</span></a></li>");
$(".sidemenu").append("<li><a href=\"#Order Template\"><span>Order Template</span></a></li>");
$(".sidemenu").append("<li><a href=\"#Contact Us\"><span>Contact Us</span></a></li>");





// 9. Extend the Sidebar Menu with 3 additional items "New Templates", "Order Template" and "Contact Us"

// 10. Change the sentence "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact." into "When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop."


$("#sidebar p:first").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");



