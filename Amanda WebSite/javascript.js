var mainImage = $("project1");
$(".img-container img").hover(function(){
   var src = $(this).attr("src");
    $("project1").attr("src",src);
});

mainImage.on("click",function(){
    $(this).css("transform","scale(2)");
});

$("project1").hover("click", function() {
  $(".dimmer").addClass("active");
});

$('.project1').hover(function(){
	$(this).toggleClass('forum_hover');
});