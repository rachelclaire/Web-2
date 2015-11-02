$(".scroller").scrollFlight();
$(".titlewrapper").on("arrived",function() {
  $(this).addClass("arrived");
});

$(".scroller").scrollFlight();
$(".titlewrapper").on("departing",function() {
  $(this).addClass("departing");
  $(this).removeClass("arrived");
});

$(".scroller").scrollFlight();
$(".titlewrapper").on("rearriving",function() {
  $(this).addClass("rearriving");
  $(this).removeClass("departing");
});

$(".scroller").scrollFlight();
$(".page three").on("departing",function() {
  $(".walker").addClass("arriving");
});
