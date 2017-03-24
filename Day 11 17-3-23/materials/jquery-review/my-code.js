// console.log("Helloooo!");


// var clickCount = 0;

// $("button").on("click", function() {
//   var clickCount = 0;
//   clickCount = clickCount + 1;
//   console.log(clickCount);
//   $("p.cool").text("Button was clicked!");
// });


// when the button is clicked
// grab the value of the input
// put the value in the h1

$("button").on("click", function(){
	var stuffTheUserTyped = $("input").val();
	$("h1").text(stuffTheUserTyped);
});