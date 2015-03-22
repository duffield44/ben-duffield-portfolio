$(function(){

	// Call Isotope plugin with imagesloaded
	var $container = $('#container');

	$container.imagesLoaded( function() {
  		$container.isotope({
    		itemSelector: '.item',
	  		layoutMode: 'masonry'
  		});
	});

	// Call items stored in items.js
	$.ajax({
		url: "js/items.js",
		contentType: "application/json",
		dataType: "json",
		type: "GET"
	})
	.success(function(result){
		console.log(result);
	});

});

