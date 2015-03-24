$(function(){

	// List of Project Items
	var items = [
		{
			id: "1",
			itemImage: "images/shopping.jpg"
		},
		{
			id: "2",
			itemImage: "images/ryu.jpg"
		},
		{
			id: "3",
			itemImage: "images/price-my-ride.png"
		},
		{
			id: "4",
			itemImage: "images/hot-or-cold.jpg"
		},
		{
			id: "5",
			itemImage: "images/premierleague-quiz.png"
		}
	]	

	// Create Item and append to #container section
	var createItem = function(){

		console.log("function working");
		$.each(items, function(i){

			// Clone .item div		
			var result = $('.templates .item').clone();

			// Add image
			result.find('img').attr('src', items[i].itemImage);

			// Append to container
			$('#container').append(result);
		});
	}
	createItem();

	// Call Isotope plugin with imagesloaded
	var $container = $('#container');

	$container.imagesLoaded( function() {
  		$container.isotope({
    		itemSelector: '.item',
	  		layoutMode: 'masonry'
  		}).isotope('shuffle');
	});

});

