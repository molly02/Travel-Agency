$(document).ready(function(){

function createElement (results) {
    $("#location").empty();
        
    for (var i = 0; i < results.length; i++) {
       var card = $("<div>").addClass("column callout small-up-1 medium-up-2 large-up-3");
       var cardCall = $("<div>")
       var title = $("<h3>").addClass("card-title").text(results[i].name);
       var image = $("<img>").attr("src", results[i].images["0"].source_url);
       var price = $("<p>").addClass("card-title").text("Price: " + results[i].price.amount + " " + results[i].price.currency);
       var link = $("<a>").attr("href",results[i].vendor_tour_url).text("Find out More!");
        card.append(cardCall);
        cardCall.append(title, image, price, link);
        $("#location").append(card);
}
}

function searchLocations(location) {

    var queryURL = "https://www.triposo.com/api/20181213/tour.json?annotate=trigram:" + location + "&trigram=%3E0.2&account=YLSBAM48&token=fld3ii4oj15xegxsnyj5a8iwppb2bgou"
    console.log (queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        console.log(response.results);
        var results = response.results;
        createElement(results);
     });
    }

    $("#select-location").on("click", function(event){
        event.preventDefault();
        var inputLocations = $("#location-input").val().trim();
        searchLocations(inputLocations);
    })

    $("button").on("click", function(){

    var location = $(this).attr("data-location");
    var queryURL = "https://www.triposo.com/api/20181213/tour.json?annotate=trigram:" + location + "&trigram=%3E0.2&account=YLSBAM48&token=fld3ii4oj15xegxsnyj5a8iwppb2bgou"
    console.log (queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response){
        var results = response.results;
        createElement(results);
    })

    })

})