$(".selector").text("Here's some text!");
console.log($(".colonialroof"))

$(".colonialtype").addClass("black");

$(".page").scrollFlight();



$("#pageone").on("rearriving",function() {
  $(".colonialtype").removeClass("gray");
  $(".federaltype").addClass("gray");
  $(".victoriantype").addClass("gray");
  $(".bungalowtype").addClass("gray");
});
$("#pagetwo").on("arriving",function() {
  $(".colonialtype").addClass("gray");
  $(".federaltype").removeClass("gray");
});
$("#pagetwo").on("rearriving",function() {
  $(".federaltype").removeClass("gray");
  $(".victoriantype").addClass("gray");
  $(".bungalowtype").addClass("gray");
});
$("#pagethree").on("arriving",function() {
  $(".victoriantype").removeClass("gray");
  $(".federaltype").addClass("gray");
});
$("#pagethree").on("rearriving",function() {
  $(".victoriantype").removeClass("gray");
  $(".bungalowtype").addClass("gray");
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

$(".hang").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/hang.png");
  $(".characteristic").text("Hanging Second Story");
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

$(".hipped").hover(function(e){ 
	console.log("hover")
  $(".characteristicimage").attr("src", "images/characteristics/hipped.png");
  $(".characteristic").text("Hipped Roof");
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