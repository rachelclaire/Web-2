$(".selector").text("Here's some text!");
console.log($(".colonialroof"))


$(".page").scrollFlight();
$(".pageone").on("arriving",function() {
  $(".housetype").text("Colonial");
});

$(".pageone").on("rearriving",function() {
  $(".housetype").text("Colonial");
});

$(".pagetwo").on("arriving",function() {
  $(".housetype").text("Federal");
});

$(".pagetwo").on("rearriving",function() {
  $(".housetype").text("Federal");
});

$(".pagethree").on("arriving",function() {
  $(".housetype").text("Victorian");
});

$(".pagethree").on("rearriving",function() {
  $(".housetype").text("Victorian");
});

$(".pagefour").on("arriving",function() {
  $(".housetype").text("Bungalow");
});

$(".pagefour").on("rearriving",function() {
  $(".housetype").text("Bungalow");
});

$(".colonialroof").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/colonialroof.png");
  $(".characteristic").text("Double-Pitched Roof");
},function(e){ 
   $(".characteristicimage").attr("src", "");
  $(".characteristic").empty();
})

$(".colonialface").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/colonialface.png");
  $(".characteristic").text("Symmetrical Facade");
},function(e){ 
   $(".characteristicimage").attr("src", "");
  $(".characteristic").empty();
})

$(".pendent").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/pendent.png");
  $(".characteristic").text("Pendents");
},function(e){ 
   $(".characteristicimage").attr("src", "");
  $(".characteristic").empty();
})



