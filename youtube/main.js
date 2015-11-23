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
}


/*addItems
var thumbnail = .item(0).snippet.thumbnails.medium.url*/