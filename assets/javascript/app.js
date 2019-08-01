
$(document).ready(function () {
	queryurl="https://www.triposo.com/api/20181213/tour.json?annotate=trigram:Amsterdam&trigram=%3E0.2&account=Bwilkie91&token=jtxzznrrzatq62syjh1v3dv4uynh15sp"
	console.log (queryurl)
	
	var movies = ["New York", "Miami", "Baltimore", "Chicago"];
	var movie = [];
	// Add buttons for original movies array
	function renderButtons() {
		$("#movie-buttons").empty();
		// for (i = 0; i < movies.length; i++) {
		// 	$("#movie-buttons").append("<button class='btn btn-success' data-movie=" + movies[i] + ">" + movies[i] + "</button>");
		// }
		for (var i = 0; i < movies.length; i++) {
			// dynamically makes buttons for every show in the array
			var a = $('<button>')
			a.addClass('movie'); // add a class
			a.attr('data-movie', movies[i]); // add a data-attribute
			a.text(movies[i]); // make button text
			movie.push(a);
			$('#movie-buttons').append(a); // append the button to buttonsView div
		}

	}

	renderButtons();

	// Adding a button for movie entered
	$("#add-movie").on("click", function (event) {
		event.preventDefault();
		// console.log(event)
		movie = $("#movie-input").val().trim();
		var b = $('<button>')
		b.addClass('movie'); // add a class
		b.attr('data-movie', movie); // add a data-attribute
		b.text(movie); // make button text
		// movie.push(a);
		$('#movie-buttons').append(b);
		// movies.push(movie);
		// $('#movie-buttons').append(movie);
		// renderButtons();
		// return;
	});


	// Getting gifs from api... onto html
	$("#movie-buttons").on("click", function (event) {
		console.log(event)
		var movie = $(event.target).attr("data-movie");
		// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
		// 	movie + "&api_key=VUyrDCYI9BaLHto1DiocGfqlbwnrEHny&limit=2"
		//     // VUyrDCYI9BaLHto1DiocGfqlbwnrEHny
		var queryURL = "https://api.unsplash.com/search/photos?query=" +
			movie
			+ "&per_page=5&client_id=a442736c796a1b94c0186b0f5ba64322591bfc5b8d98816bb6f7d2c63706d6aa"
		$.ajax({
			url: queryURL,
			method: "GET",
		}).then(function (data) {
			var results = data.results;
			$("#movies").empty();
			for (var i = 0; i < results.length; i++) {
				var movieDiv = $('<div>');
				// var p = $("<p>").text("Rating: " + results[i].rating);

				// var 
				// var link = $('<a href="https://www.google.com/maps/search/"' + movies + '"/@42.0843388,-87.9365323,10z/data=!3m1!4b1">').text(link);
				// // link.attr("href", 'https://www.google.com');

				var link = $("<a>");
				link.attr("href", "https://www.google.com/maps/search/" + movie + "/@42.0846639,-87.935583,10z");
				link.attr("title", "Google.com");
				link.text("Google");
				link.addClass("link");

				var movieImg = $("<img>");
				movieImg.attr("src", results[i].urls.regular);
				// movieImg.attr("data-still", results[i].images.original_still.url);
				// movieImg.attr("data-animate", results[i].images.original.url);
				// movieImg.attr("data-state", "still");
				// movieImg.attr("class", "gif");
				// movieDiv.append(p);
				movieDiv.append(link);
				movieDiv.append(movieImg);

				$("#movies").append(movieDiv);
			}
		});
	});

});








