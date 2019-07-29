$(document).ready(function() {
    var flight;
    var queryURL = "https://developer.goibibo.com/api/search/?app_id=c1ea2a16&app_key=ba8d21d387b423781cf4a234ff1c731c&format=json&source=ORD&destination=YYZ&dateofdeparture=20190729&dateofarrival=20190729&seatingclass=E&adults=1&children=0&infants=0&counter=0";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // $().text(JSON.stringify(response));
    });
});