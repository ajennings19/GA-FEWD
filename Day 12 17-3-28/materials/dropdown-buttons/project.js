$(".buttonone").on("click", function(){
 $("#buttondropdown1").toggle();
});

$(".buttonone").on("focusout", function() {
 $("#buttondropdown1").css("display", "none");
})

$(".buttontwo").on("click", function(){
 $("#buttondropdown2").toggle();
 });

$(".buttontwo").on("focusout", function() {
 $("#buttondropdown2").css("display", "none");
})











// $(".buttonone").on("click", function(){
//   $("#buttondropdown1").toggle();
//   // $("#buttondropdown1").css("display", "block");
// });

// $(".buttontwo").on("click", function(){
//   if 
//   $("#buttondropdown2").css("display", "block");
// });

//     if (!event.target.matches('.buttonone')

//     var dropdown = document.getElementByClass("buttondropdown")
//     var i;
//     for (i = 0; i < buttondropdown; i++){
//       var openDropdown = dropdowns[i];
//       if (openDropdown.buttondropdown.contains('show')){
//         openDropdown.buttondropdown.remove('show');
//       }
//     }
//   }
// });



// /* When the user clicks on the button, 
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }