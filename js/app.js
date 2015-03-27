$(function(){

	// LIST OF PROJECT ITEMS
	var items = [
		{
			id: "1",
			itemName: "Shopping List",
			itemImage: "images/shopping.jpg",
			category: "App",
			button: "Make Your List",
			url: "http://duffield44.github.io/shopping-list/"
		},
		{
			id: "2",
			itemName: "jQuery Street Fighter",
			itemImage: "images/ryu.jpg",
			category: "App",
			button: "Fight!",
			url: "http://duffield44.github.io/jquery-streetfighter/"
		},
		{
			id: "3",
			itemName: "Price My Ride",
			itemImage: "images/price-my-ride.png",
			category: "App",
			button: "Price Your Ride",
			url: "http://duffield44.github.io/premierleague-quiz"
		},
		{
			id: "4",
			itemName: "Hot or Cold",
			itemImage: "images/hot-or-cold.jpg",
			category: "App",
			button: "Play Hot or Cold",
			url: "http://duffield44.github.io/hot-or-cold-app/"
		},
		{
			id: "5",
			itemName: "Premier League Quiz",
			itemImage: "images/premierleague-quiz.png",
			category: "App",
			button: "Test Your Knowledge",
			url: "http://duffield44.github.io/premierleague-quiz"
		},
		{
			id: "6",
			itemName: "My Special Dress",
			itemImage: "images/my-special-dress.jpg",
			category: "Company",
			button: "Find Your Dress",
			url: "http://myspecialdress.com/"
		},
		{
			id: "7",
			itemName: "Ubud Pilates Club",
			itemImage: "images/ubud-pilates-club.jpg",
			category: "Company",
			button: "Go To Website",
			url: "http://ubudpilatesclub.com/"
		},
		{
			id: "8",
			itemName: "Hypnotism Pro",
			itemImage: "images/hypnotismpro.jpg",
			category: "Company",
			button: "Go To Website",
			url: "http://hypnotismpro.com/"
		},
		{
			id: "9",
			itemName: "Karma Clone",
			itemImage: "images/karma.jpg",
			category: "Website",
			button: "Go To Website",
			url: "http://duffield44.github.io/startup-landing-page-clone/"
		},
		{
			id: "10",
			itemName: "Blasting Off with Bootstrap",
			itemImage: "images/bootstrap.jpg",
			category: "Website",
			button: "Blast Off!",
			url: "http://duffield44.github.io/bootstrap/"
		},
		{
			id: "11",
			itemName: "Fact vs Fitness",
			itemImage: "images/fact-vs-fitness.jpg",
			category: "Website",
			button: "Go To Website",
			url: "http://www.factvsfitness.com/"
		}
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
			result.find('.name').text(items[i].itemName);

			// Add Category;
			result.addClass(items[i].category);
			result.find('.category').text(items[i].category);

			// Add ID
			result.attr('id', items[i].id);

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

		// Slide up intro section
		$('.intro').slideUp(400);

		var selectedCategory = $(this).find('a').text();

		// Change item width for filter
		if (selectedCategory == "All"){
			$('.item').removeClass('w2');
		} else {
			$('.item').addClass('w2');
		}	

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

	// HOVER ON ITEM
	$('.item').mouseenter(function(){
		$(this).find('.hover').fadeIn(300);
	})
	.mouseleave(function(){
		$(this).find('.hover').hide();
	});

	// CLICK ON ITEM
	$('.item').on('click', function(){

		// Clone .description div
		var desc = $('.templates .description').clone();
		var itemID = $(this).attr('id');

		// Add Image
		desc.find('img').attr('src', items[itemID - 1].itemImage);	

		// Add Header, Category & Description
		desc.find('h1').text(items[itemID - 1].itemName);
		desc.find('h3').text(items[itemID - 1].category);
		desc.find('p').text(items[itemID - 1].itemDesc);

		// Add Button
		desc.find('.btn-go').text(items[itemID - 1].button).attr('href', items[itemID - 1].url);

		// Append to #descContainer section
		$('#descContainer').empty().append(desc);
		$(desc).slideDown(400);
	});

	// INTRO CLOSE BUTTON
	$('.intro .btn-close').on('click', function(){
		$('.intro').slideUp(400);
	});

	// CLICK ON NAVBAR-BRAND
	$('.navbar-brand').on('click', function(){
		var introDisplay = $('.intro').css('display');
		if (introDisplay == "none"){
			$('.intro').slideDown(400);
		}
		else {
			$('.intro').slideUp(400);
		}
	});

});

