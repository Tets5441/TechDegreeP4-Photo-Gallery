lightbox.option({      
	'wrapAround': true,
	'imageFadeDuration': 200,
	'alwaysShowNavOnTouchDevices': true,
  });

//search field 

$("#search").keyup(function() {
    const $search = $("#search").val().toUpperCase();
    const $photos = $(".photos");
	 for (i = 0; i < $photos.length; i++) {
		 if ($photos[i].getAttribute("data-title").toUpperCase().includes($search)) {		  		
			 $($photos[i]).parent().css("display", "inline-block")
		 } 	else { 
			 $($photos[i]).parent().hide();
		 }  
	 }
});


