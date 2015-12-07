function showModal(item) {
	//empty out the modal.
   $(".modal").empty();
   //make an h1, add text, get the text from item.Name
   var $h1 = $("<h1>").text(item.name);
   //make an image, add the source from item.Image
   var $img = $("<img>").attr("src",item.Image);
   //make a paragraph, add the text from item.color
   var $p1 = $("<p>").html("<b>color  </b>"+item.color);
   var $p2 = $("<p>").html("<b>style  </b>"+item.style);
   var $p3 = $("<p>").html("<b>shape  </b>"+ item.shape);
   //make a div to hold the text in it
   var $div1 = $("<div>").addClass("right");
   var $div2 = $("<div>").addClass("left");

//add the new stuff to the modal
   $div1.append($p1, $p2, $p3);
   $div2.append($img);
   $(".modal").append($h1, $div1, $div2);
   
   //show the overlay and the modal
   $(".overlay").show();
   $(".modal").show();

}

//make a function that hides the overlay and the modal
function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}

//make a function to add one item, and to show the modal on click
function addItem(item) {
  //make a new list item with a class "item" and a class from the data spreadsheet

  //add a data-category attribute to the list item, will be used for filter
  var $div = $("<div>").addClass("item").addClass(item.color.toLowerCase());
  $div.attr("data-color",item.color);
  $div.attr("data-style",item.style);
  $div.attr("data-shape",item.shape);
  $div.attr("data-name",item.name);
  // FACET: add data-style attribute
  
  
  var $img = $("<img>").attr("src",item.Image).addClass("main");
  $div.append($img);
  $(".imagewrapper").append($div);
  
  //when you click on the list item, show the modal
  $div.on("click",function(e) {
      showModal(item);
  });
};

//make a loop function to add all the items. sub in "data" for parameter so that it can grab stuff from the spreadsheet
function addItems(data) {
  //make the loop update the spreadsheet directory thing every rotation so that it gets the next item each time (i)	
  for(var i=0;i<data.length;i++) {
    addItem(data[i]);
  }
}

//make everything happen
function callback(data) { 
  //call that function
  addItems(data);
  
  //selecting container with a class of collection? doing packery stuff.
  var $container = $('.collection');
  $container.packery({
    itemSelector: '.item',
    gutter: 10,
  });
  
  //letting it know what element to filter based on... the packery stuff?
  var myCollection = $(".item").collection({
    filters: { 
      "title": "[data-name]",
      "color-facet": "[data-color]",
	  "style-facet": "[data-style]",
	  "shape-facet": "[data-shape]",
		// add a style facet
    },

    
    update: function() { 
      $container.packery(); 
      setTimeout(function() { $container.packery()},600);
    },
    ordered: function() {
      $container.packery('reloadItems');
      console.log("Whoa");
    },
    hide: function($elem) { $elem.hide(); },
    show: function($elem) { $elem.fadeIn(500); },
  });
  
  //toggle to turn the color buttons on and off


  $(".color-category").on("click",function(e) {  
	  var alreadySelected = $(this).hasClass("off");
	  
	  
	  if(alreadySelected) {
		 $(this).removeClass("off");
 	     myCollection.filtered("color-facet","");
	  } else {
	     $("#filter-bar button.color-category").removeClass("off"); 
	     $(this).addClass("off");
		 var colorToFilter = $(this).data("color");
	     myCollection.filtered("color-facet",colorToFilter);
	  }
     
  });

  $(".style-category").on("click",function(e) {  
	  var alreadySelected = $(this).hasClass("off");
	  
	  
	  if(alreadySelected) {
		 $(this).removeClass("off");
 	     myCollection.filtered("style-facet","");
	  } else {
	     $("#filter-bar button.style-category").removeClass("off"); 
	     $(this).addClass("off");
		 var styleToFilter = $(this).data("style");
	     myCollection.filtered("style-facet",styleToFilter);
	  }
     
  });
  
  $(".shape-category").on("click",function(e) {  
	  var alreadySelected = $(this).hasClass("off");
	  
	  
	  if(alreadySelected) {
		 $(this).removeClass("off");
 	     myCollection.filtered("shape-facet","");
	  } else {
	     $("#filter-bar button.shape-category").removeClass("off"); 
	     $(this).addClass("off");
		 var shapeToFilter = $(this).data("shape");
	     myCollection.filtered("shape-facet",shapeToFilter);
	  }
     
  });

  // add a handler for that facet

  //toggle to turn the order buttons on and off
  $(".order").on("click",function(e) {
      var order = $(this).data("order");
      //turn off all the buttons
	  $("#filter-bar button.category").removeClass("off");
	  //turn on the button you just clicked on.
      $(this).addClass("off");
      myCollection.ordered(order);
  });


  //search filters as you type
  $("#search").on("change keyup",function(e) {
      myCollection.filtered("title", $(this).val());
  });
  //when you click the overlay, hide the modal.
  $(".overlay").on("click",function(e) {
      hideModal();
  });

}
//link to google doc.
  Tabletop.init( { key: "https://docs.google.com/spreadsheets/d/1dI6AJb3uNVfNgWIAOYBwXIEzBikr8FafWerT53xsNZ4/pubhtml",
                   callback: callback,
                   simpleSheet: true } )