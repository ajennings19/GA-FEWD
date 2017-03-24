$("box1").on("click", function(){
	$("box1").css("width", "500px")
	$("box1").css("height", "500px")
	$("box1").css("background-color", "blue")
	$("box1").text("I WAS CLICKED")
});

// (must ass "bigger" class within .css that changes the size)


$("#box2").on("click", function(){
	clickCount = clickCount + 1
	if (clickCount === 1){
	$("#box2").addClass("#bigger");
	} else {
	$("#box2").removeClass("#bigger");
	clickCount = 0;
	}
});

// $("#box2").on("click", function(){
// 	$("#box2").css("width", "500px")
// 	$("#box2").css("height", "500px")
// 	$("#box2").css("background-color", "blue")
// 	$("#box2").text("I WAS CLICKED")
// });
