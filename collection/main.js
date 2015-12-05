function showModal(item) {
	//empty out the modal.
   $(".modal").empty();
   //make an h1, add text, get the text from item.Name
   var $h1 = $("<h1>").text(item.name);
   //make an image, add the source from item.Image
   var $img = $("<img>").attr("src",item.Image);
   //make a paragraph, add the text from item.color
   var $p = $("<p>").text(item.Description);

//add the new stuff to the modal
   $(".modal").append($h1,$img,$p);
   
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
  //make a new list item with a class "item" and a class from the data spreadsheet (indicating click state?)
  var $li = $("<li>").addClass("item").addClass(item.color.toLowerCase());
  //add a data-category attribute to the list item, will be used for filter
  $li.attr("data-color",item.color);
  //make an h2 with class "name" and text from the spreadsheet
  var $h2 = $("<h2 class='color'>").text(item.color);
  //make a paragraph with text from the spreadsheet
  var $p = $("<p class='material'>").text(item.material);
  //add the h2 and p to the list item
  $li.append($h2,$p);
  //when you click on the list item, show the modal
  $li.on("click",function(e) {
      showModal(item);
  });
  //add in the list item to the wrapping collection
  $(".collection").append($li);
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
      "title": "h2",
      "color-facet": "[data-color]"
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
  $(".category").on("click",function(e) {

      var colorToFilter = $(this).data("colorfilter");
      myCollection.filtered("color-facet",colorToFilter);

	  //takes "selected" class off of everything
      $("#filter-bar button.category").removeClass("selected");
	  //puts "selected" on the button you just clicked
      $(this).addClass("selected");
  });

  //toggle to turn the order buttons on and off
  $(".order").on("click",function(e) {
      var order = $(this).data("order");
      //turn off all the buttons
	  $("#filter-bar button.category").removeClass("selected");
	  //turn on the button you just clicked on.
      $(this).addClass("selected");
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