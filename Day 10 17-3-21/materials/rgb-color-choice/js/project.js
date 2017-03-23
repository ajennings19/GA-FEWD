// when the button is pressed
// change the button color 
// to values inputed

// when button is clicked (test w console.log)
// grab red value
// grab green value
// grab blue value


$("a").on("click", function(){
	var userRed = $("input#red").val();
	var userGreen = $("input#green").val();
	var userBlue = $("input#blue").val();

	var rgbVal = "rgb("+userRed+","+userGreen+","+userBlue+")";


$("#wrapper").css("background-color", rgbVal);

	// $("#wrapper").css("background", "AddedInputs");
});