$(document).ready(function() {
    var origin = $("#origin").val().trim();
    var destination = $("#destination").val().trim();
    var departureDate = $("#departure-date").val().trim();
    var departureDateArr = departureDate.split('/');
    var newDepartureDate = departureDateArr[2]+departureDateArr[0]+departureDateArr[1];
    var arrivalDate = $("#arrival-date").val().trim();
    var arrivalDateArr = arrivalDate.split('/');
    var newArrivalDate = arrivalDateArr[2]+arrivalDateArr[0]+arrivalDateArr[1];
    var classOfTravel = $("#class-of-travel").val().trim();
    var numAdults = $("#numAdults").val().trim();
    var numChildren = $("#numChildren").val().trim();
    var numInfants = $("#numInfants").val().trim();
    var queryURL = "https://developer.goibibo.com/api/search/?app_id=c1ea2a16&app_key=ba8d21d387b423781cf4a234ff1c731c&format=json&source="+origin+"&destination="+destination+"&dateofdeparture="+newDepartureDate+"&dateofarrival="+newArrivalDate+"&seatingclass="+classOfTravel+"&adults="+numAdults+"&children="+numChildren+"&infants="+numInfants+"&counter="+0;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $(".subheader-flights").text(JSON.stringify(response));
    });
});