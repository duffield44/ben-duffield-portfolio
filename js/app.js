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

			// Add Name
			$('.item .name').text(items[i].itemName);

			// Add Category
			result.addClass(items[i].category);
			$('.item .category').text(items[i].category);

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

	// CLICK A CATEGORY - FILTER
	$('.categories li').on('click', function(){

		$('.item').addClass('w2');
		var selectedCategory = $(this).find('a').text();

		// Filter selected category
		if (selectedCategory == "All"){
			$container.isotope({
				filter: '*'
			}).isotope('shuffle');
		}
		else if (selectedCategory == "Apps"){
			$container.isotope({
				filter: '.App'
			}).isotope('shuffle');
		}
		else if (selectedCategory == "Companies"){
			$container.isotope({
				filter: '.Company'
			}).isotope('shuffle');
		}
		else if (selectedCategory == "Websites"){
			$container.isotope({
				filter: '.Website'
			}).isotope('shuffle');
		}
		else if (selectedCategory == "Projects"){
			$container.isotope({
				filter: '.Project'
			}).isotope('shuffle');
		}
	});

});

