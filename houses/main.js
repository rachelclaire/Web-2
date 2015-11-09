$(".selector").text("Here's some text!");
console.log($(".colonialroof"))

$(".colonialroof").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/colonialroof.png");
  $(".characteristic").text("Double-Pitched Roof");
},function(e){ 
   $(".characteristicimage").attr("src", "");
  $(".characteristic").empty();
})



