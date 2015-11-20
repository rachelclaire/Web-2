$(".selector").text("Here's some text!");
console.log($(".colonialroof"))

$(".colonialtype").addClass("black");

$(".page").scrollFlight();


$("#pageone").on("rearriving",function() {
  $(".colonialtype").addClass("black"); 
  $(".colonialtype").removeClass("gray");
  $(".federaltype").addClass("gray");
});
$("#pagetwo").on("arriving",function() {
  $(".colonialtype").addClass("gray");
  $(".federaltype").removeClass("gray"); 
});
$("#pagetwo").on("rearriving",function() {
  $(".colonialtype").addClass("gray");
  $(".federaltype").removeClass("gray"); 
  $(".victoriantype").addClass("gray"); 
});
$("#pagethree").on("arriving",function() {
  $(".federaltype").addClass("gray");
  $(".victoriantype").removeClass("gray");
});
$("#pagethree").on("rearriving",function() {
  $(".bungalowtype").addClass("gray");
  $(".victoriantype").removeClass("gray"); 
  //$(".victoriantype").addClass("gray"); 
});
$("#pagefour").on("arriving",function() {
  $(".victoriantype").addClass("gray");
  $(".bungalowtype").removeClass("gray");
});



$(".colonialroof").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/colonialroof.png");
  $(".characteristic").text("Double-Pitched Roof");
},function(e){ 
   $(".characteristicimage").attr("src", "images/characteristics/blank.png");
  $(".characteristic").empty();
})

$(".colonialface").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/colonialface.png");
  $(".characteristic").text("Symmetrical Facade");
},function(e){ 
   $(".characteristicimage").attr("src", "images/characteristics/blank.png");
  $(".characteristic").empty();
})

$(".pendent").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/pendent.png");
  $(".characteristic").text("Pendents");
},function(e){ 
   $(".characteristicimage").attr("src", "images/characteristics/blank.png");
  $(".characteristic").empty();
})

$(".elliptocal").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/elliptocal.png");
  $(".characteristic").text("Eliptocal Fanlight");
},function(e){ 
   $(".characteristicimage").attr("src", "images/characteristics/blank.png");
  $(".characteristic").empty();
})

$(".pediment").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/pediment.png");
  $(".characteristic").text("Pediment");
},function(e){ 
   $(".characteristicimage").attr("src", "images/characteristics/blank.png");
  $(".characteristic").empty();
})

$(".pilaster").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/pilaster.png");
  $(".characteristic").text("Pilasters");
},function(e){ 
   $(".characteristicimage").attr("src", "images/characteristics/blank.png");
  $(".characteristic").empty();
})

$(".cupola").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/cupola.png");
  $(".characteristic").text("Cupola");
},function(e){ 
   $(".characteristicimage").attr("src", "images/characteristics/blank.png");
  $(".characteristic").empty();
})

$(".ornamentation").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/ornamentation.png");
  $(".characteristic").text("Ornamention");
},function(e){ 
   $(".characteristicimage").attr("src", "images/characteristics/blank.png");
  $(".characteristic").empty();
})

$(".crossgable").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/crossgable.png");
  $(".characteristic").text("Cross Gable");
},function(e){ 
   $(".characteristicimage").attr("src", "images/characteristics/blank.png");
  $(".characteristic").empty();
})

$(".horizontal").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/horizontal.png");
  $(".characteristic").text("Horizontal Emphasis");
},function(e){ 
   $(".characteristicimage").attr("src", "images/characteristics/blank.png");
  $(".characteristic").empty();
})

$(".chunky").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/chunky.png");
  $(".characteristic").text("Chunky Support Columns");
},function(e){ 
   $(".characteristicimage").attr("src", "images/characteristics/blank.png");
  $(".characteristic").empty();
})

$(".halfstory").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/halfstory.png");
  $(".characteristic").text("Half-Second Story");
},function(e){ 
   $(".characteristicimage").attr("src", "images/characteristics/blank.png");
  $(".characteristic").empty();
})