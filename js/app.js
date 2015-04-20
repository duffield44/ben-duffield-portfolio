$(function(){

	// LIST OF PROJECT ITEMS
	var items = [
		{
			id: "1",
			itemName: "My Shopping List",
			itemImage: "images/shopping-list.jpg",
			category: "App",
			button: "Make Your List",
			url: "http://duffield44.github.io/shopping-list/",
			itemDesc: "A simple mobile responsive application for users to create their shopping lists. Users can add to the list, check off their items, and delete items at the touch of a button. Easy, clean and effortless. This app is built from scratch using HTML, CSS, and jQuery, and the use of media queries makes it useable on the smallest devices. The wonderful colour scheme is based on the background stock photo taken from picjumbo.com."
		},
		{
			id: "2",
			itemName: "jQuery Street Fighter",
			itemImage: "images/ryu.jpg",
			category: "App",
			button: "Fight!",
			url: "http://duffield44.github.io/jquery-streetfighter/",
			itemDesc: "This app is recreating the movements of Ryu from the old school video game Street Fighter. The user can make Ryu throw a hadouken by clicking on him, or make him strike a cool pose by holding down the x key. This was the first JavaScript project I completed on Thinkful.com's Frontend Development Course. The gif files of Ryu were provided by Thinkful, but the code in HTML, CSS and jQuery was provided by me. Try it out for a hit of nostalgia. Hadouken!!"
		},
		{
			id: "3",
			itemName: "Price My Ride",
			itemImage: "images/price-my-ride.jpg",
			category: "App",
			button: "Price Your Ride",
			url: "http://duffield44.github.io/car-price",
			itemDesc: "Get the post-haggle price for your used car! This mobile responsive application allows users to appraise their used car by selecting their model, and entering it's year, mileage and condition. The app uses an AJAX call to retrieve vehicle information from the Edmunds.com API. Using the user's postcode, the app will display an appraised price for the car based on the current average base price in the area indicated. This project was built from scratch using HTML, CSS, AJAX and jQuery. The use of media-queries makes it reponsive to all devices. Maybe you're curious about the price of your car - give it a go!"
		},
		{
			id: "4",
			itemName: "Hot or Cold",
			itemImage: "images/hot-or-cold.jpg",
			category: "App",
			button: "Play Hot or Cold",
			url: "http://duffield44.github.io/hot-or-cold-app/",
			itemDesc: "A quick game to show the use of JavaScript and jQuery. The game will select a random number and the user tries to guess it. The app will tell the user if he is hot or cold. This was a project I completed under Thinkful.com's Frontend Development course. Thinkful provided the HTML and CSS. It was my job to create the behaviour using JavaScript."
		},
		{
			id: "5",
			itemName: "Premier League Quiz",
			itemImage: "images/premierleague-quiz.png",
			category: "App",
			button: "Test Your Knowledge",
			url: "http://duffield44.github.io/premierleague-quiz",
			itemDesc: "A quick quiz based on the English Premier Football League. This was created to practice and show my Javascript skills and knowledge of object values. The game will keep your score throughout the whole quiz. Everything was created from scratch using HTML, CSS, jQuery and media queries to make it useable on all devices. Simple and solid code."
		},
		{
			id: "6",
			itemName: "My Special Dress",
			itemImage: "images/my-special-dress.jpg",
			category: "Company",
			button: "Find Your Dress",
			url: "http://myspecialdress.com/",
			itemDesc: "A beautiful e-commerce site using Wordpress created for a client selling wedding dresses and prom dresses. This website allows users to purchase products using shopping cart software and a payment gateway which is linked to paypal. The shopper can effortlessly filter through products, add coupon codes and select between different shipping rates. The user also has the ability to select different currencies to attract worldwide customers. The site makes good use of open graph and twitter card meta data to make each product easily shareable. The site is also monetized using Google Adsense. The use of a slidedeck and photoshop has made this website very easy on the eye for a very happy client. I also helped this client with some extensive social media work using facebook, pinterest and tumblr. This has been very effective in driving organic traffic to the website."
		},
		{
			id: "7",
			itemName: "Ubud Pilates Club",
			itemImage: "images/ubud-pilates-club.jpg",
			category: "Company",
			button: "Go To Website",
			url: "http://ubudpilatesclub.com/",
			itemDesc: "A quick and easy website created using Wordpress for a small business based in Bali. The site has a share bar and the appropriate open graph and twitter card meta data for easy sharing. The site is also search engine optimized to the appropriate standards. I worked with this client on social media marketing which has been effective in driving organic traffic to the site. The website is also monetized using Google Adsense."
		},
		{
			id: "8",
			itemName: "Hypnotism Pro",
			itemImage: "images/hypnotismpro.jpg",
			category: "Company",
			button: "Go To Website",
			url: "http://hypnotismpro.com/",
			itemDesc: "This is a website that I created for an affiliate marketing client. I worked with the client to find a niche using Google Adwords, and I used SEO on the website to draw traffic by using the appropriate niche keywords and keyphrases. Traffic was also drawn to the site organically using social media marketing. I helped the client monetize the site using Google Adsense, Amazon Associates, and with clickbank.com product advertisements. The site has a share bar and the appropriate open graph and twitter card meta data for easy sharing."
		},
		{
			id: "9",
			itemName: "Karma Clone",
			itemImage: "images/karma.jpg",
			category: "Website",
			button: "Go To Website",
			url: "http://duffield44.github.io/startup-landing-page-clone/",
			itemDesc: "This was my first assignment on Thinkful.com's Frontend Development course. The project was to build a clone from scratch of the Karma startup home page. This was a good chance to show some of my HTML and CSS skills early in my career. Please note that the navigation links do not connect to other pages. The images were provided by Thinkful."
		},
		{
			id: "10",
			itemName: "Blasting Off with Bootstrap",
			itemImage: "images/bootstrap.jpg",
			category: "Website",
			button: "Blast Off!",
			url: "http://duffield44.github.io/bootstrap/",
			itemDesc: "This is a fictitious site that I created doing codeschool.com's \"Blasting Off With Bootstrap\" class. I find Twitter Bootstrap a very quick and efficient tool for creating websites, and I have since used it on my sites including this portfolio. Please note that the links on the site do not connect to other pages."
		},
		{
			id: "11",
			itemName: "Fact vs Fitness",
			itemImage: "images/fact-vs-fitness.jpg",
			category: "Website",
			button: "Go To Website",
			url: "http://www.factvsfitness.com/",
			itemDesc: "STILL IN PRODUCTION. \nI am currently working with a client to build a fitness website, which will include fitness & nutrition articles, fitness videos, and downloadable meal plans. As we develop the site, a basic wordpress blog has been launched, indexed with Google, and search-engine optimized so that it can gain some page authority in the meantime."
		},
		{
			id: "12",
			itemName: "Angular Gem Store",
			itemImage: "images/gem-store.gif",
			category: "Project",
			button: "Go To Website",
			url: "http://duffield44.github.io/angular",
			itemDesc: "A simple project using to show some knowledge of Angular.JS. This app also uses Twitter Bootstrap and makes use of the $http Angular service to fetch JSON data."
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

		// Slide up intro or description section 
		$('.intro').slideUp(400);
		$('.description').slideUp(400);

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

		$('html, body').animate({ scrollTop: 0 }, 400);

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

		// Close .intro section
		$('.intro').slideUp(400);


		// DESCRIPTION CLOSE BUTTON
		$('.description .btn-close').on('click', function(){
			$('.description').slideUp(400);
		});
	});

	// INTRO CLOSE BUTTON
	$('.intro .btn-close').on('click', function(){
		$('.intro').slideUp(400);
	});

	
	// CLICK ON NAVBAR-BRAND
	$('.navbar-brand').on('click', function(){

		// Intro section slide up or down
		var introDisplay = $('.intro').css('display');
		if (introDisplay == "none"){
			$('.intro').slideDown(400);
		}
		else {
			$('.intro').slideUp(400);
		}

		// Description section slideup
		$('.description').slideUp(400);
	});

	// CHANGE INTRO PICTURE WIDTH 
	var checkWidth = function(){
	    if ($(window).width() < 514) {
	        $('.image-container').removeClass('col-xs-6 col-xs-offset-3');
	        $('.image-container').addClass('col-xs-10 col-xs-offset-1');
	    }
	    else {
	    	$('.image-container').removeClass('col-xs-10 col-xs-offset-1');
	        $('.image-container').addClass('col-xs-6 col-xs-offset-3');
	    }	    
	}
	checkWidth();

    /*If browser resized, check width again */
    $(window).resize(function() {
        checkWidth();
    });
	
});

