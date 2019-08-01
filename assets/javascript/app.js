$(document).ready(function () {
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
		$('#movie-buttons').append(b);
	});
	// Getting gifs from api... onto html
	$("#movie-buttons").on("click", function (event) {
		console.log(event)
		var movie = $(event.target).attr("data-movie");
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
				var link = $("<a>");
				link.attr("href", "https://www.google.com/maps/search/" + movie + "/@42.0846639,-87.935583,10z");
				link.attr("title", "For Hotels link it");
				link.text("For Hotels link it");
				link.addClass("link");
				var movieImg = $("<img>");
				movieImg.attr("src", results[i].urls.regular);
				movieDiv.append(link);
				movieDiv.append(movieImg);

				$("#movies").append(movieDiv);
			}
		});
	});

});







