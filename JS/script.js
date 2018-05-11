lightbox.option({      
	'wrapAround': true,
	'imageFadeDuration': 2,
	'alwaysShowNavOnTouchDevices': true,
  });

//search field 

$("#search").keyup(function() {
	const $search = $("#search").val().toUpperCase();
   const $title = $(".photos");
	 for (let i = 0; i < $title.length; i++){
		 if ($title[i].getAttribute("data-title").toUpperCase().includes($search)) {		  		
			 $($title[i]).parent().css("display", "inline-block")
			 console.log($title[i]);
		 } 	else { 
			 $($title[i]).parent().hide();
		 }  
	 }
});

//commit to git hub

/* original code
var search = $("#search")
var res = search.toLowerCase();
var $title = $(".photos");

$("#search").addEventListener("keyup", function() {
	 for (let i = 0; i < title.length; i+=){
		 if (title[i].getAttr("data-title").toLowerCase().includes('search')) {		  		
			 title.show
		 } 	else { 
			 title.hide
		 }  
	 }
});
*/

