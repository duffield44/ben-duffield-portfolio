$(function(){

	// LIST OF PROJECT ITEMS
	var items = [
		{
			id: "1",
			itemName: "Shopping List",
			itemImage: "images/shopping.jpg",
			category: "App"
		},
		{
			id: "2",
			itemName: "jQuery Street Fighter",
			itemImage: "images/ryu.jpg",
			category: "App"
		},
		{
			id: "3",
			itemName: "Price My Ride",
			itemImage: "images/price-my-ride.png",
			category: "App"
		},
		{
			id: "4",
			itemName: "Hot or Cold",
			itemImage: "images/hot-or-cold.jpg",
			category: "App"
		},
		{
			id: "5",
			itemName: "Premier League Quiz",
			itemImage: "images/premierleague-quiz.png",
			category: "App"
		},
		{
			id: "6",
			itemName: "My Special Dress",
			itemImage: "images/my-special-dress.jpg",
			category: "Company"
		},
		{
			id: "7",
			itemName: "Ubud Pilates Club",
			itemImage: "images/ubud-pilates-club.jpg",
			category: "Company"
		},
		{
			id: "8",
			itemName: "Hypnotism Pro",
			itemImage: "images/hypnotismpro.jpg",
			category: "Company"
		},


	]	

	// CREATE ITEM
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

	// CALL ISOTOPE PLUGIN
	var $container = $('#container');

	$container.imagesLoaded( function() {
  		$container.isotope({
    		itemSelector: '.item',
	  		layoutMode: 'masonry'
  		}).isotope('shuffle');
	});

});

