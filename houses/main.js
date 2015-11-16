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

$(".elliptocal").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/elliptocal.png");
  $(".characteristic").text("Eliptocal Fanlight");
},function(e){ 
   $(".characteristicimage").attr("src", "");
  $(".characteristic").empty();
})

$(".pediment").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/pediment.png");
  $(".characteristic").text("Pediment");
},function(e){ 
   $(".characteristicimage").attr("src", "");
  $(".characteristic").empty();
})

$(".pilaster").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/pilaster.png");
  $(".characteristic").text("Pilasters");
},function(e){ 
   $(".characteristicimage").attr("src", "");
  $(".characteristic").empty();
})

$(".cupola").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/cupola.png");
  $(".characteristic").text("Cupola");
},function(e){ 
   $(".characteristicimage").attr("src", "");
  $(".characteristic").empty();
})

$(".ornamentation").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/ornamentation.png");
  $(".characteristic").text("Ornamention");
},function(e){ 
   $(".characteristicimage").attr("src", "");
  $(".characteristic").empty();
})

$(".crossgable").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/crossgable.png");
  $(".characteristic").text("Cross Gable");
},function(e){ 
   $(".characteristicimage").attr("src", "");
  $(".characteristic").empty();
})

$(".horizontal").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/horizontal.png");
  $(".characteristic").text("Horizontal Emphasis");
},function(e){ 
   $(".characteristicimage").attr("src", "");
  $(".characteristic").empty();
})

$(".chunky").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/chunky.png");
  $(".characteristic").text("Chunky Support Columns");
},function(e){ 
   $(".characteristicimage").attr("src", "");
  $(".characteristic").empty();
})

$(".halfstory").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/halfstory.png");
  $(".characteristic").text("Half-Second Story");
},function(e){ 
   $(".characteristicimage").attr("src", "");
  $(".characteristic").empty();
})