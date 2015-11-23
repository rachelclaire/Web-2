/*var videoId = "4IP_E7efGWE";
$iframe = $("<iframe>")
$iframe.src("https://www.youtube.com/embed/" + videoId);*/

function addBoxes(data) {
	for(var i = 0; i < data.items.length; i++) {
    addThumbnail(data.items[i]);
}
	console.log(data)
  
}


function addThumbnail(video){

var imageUrl = video.snippet.thumbnails.medium.url	
	
var $container = $(".container");
var $box = $("<div class='box'>");
var $img = $("<img>").attr("src",imageUrl);

$box.append($img);
$container.append($box);
$img.on("click",function(e) {
  showModal(video);
});
}


function showModal(videoData) {
  var title = videoData.snippet.title;
  var imageUrl = videoData.snippet.thumbnails.medium.url;
  var caption = videoData.snippet.description;
  
  
  $(".modal").empty();
   
  var $h1 = $("<h1>").text(title);
  var $img = $("<img>").attr("src",imageUrl);
  var $p = $("<p>").text(caption);

   $(".modal").append($h1,$img,$p);
   
   $(".overlay").show();
   $(".overlay").one("click",function(e) {
     hideModal();
   });
   $(".modal").show();

}

function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}



/*addItems
var thumbnail = .item(0).snippet.thumbnails.medium.url*/