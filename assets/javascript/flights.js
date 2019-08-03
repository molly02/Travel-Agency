function displayFlightInfo() {
        var origin = $("#origin").val().trim();
        console.log("origin: " + origin);
        var destination = $("#destination").val().trim();
        console.log("destination: " + destination);
        var departureDate = $("#departure-date").val().trim();
        console.log("departure date: "+ departureDate);
        var departureDateArr = departureDate.split('-');
        var newDepartureDate = departureDateArr[0]+departureDateArr[1]+departureDateArr[2];
        console.log("departure date (modified): " + newDepartureDate);
        var arrivalDate = $("#arrival-date").val().trim();
        console.log("arrival date: " + arrivalDate);
        var arrivalDateArr = arrivalDate.split('-');
        var newArrivalDate = arrivalDateArr[0]+arrivalDateArr[1]+arrivalDateArr[2];
        console.log("arrival date (modified): " + newArrivalDate);
        var classOfTravel = $("#class-of-travel").val().trim();
        console.log("class of travel: " + classOfTravel);
        var numAdults = $("#numAdults").val().trim();
        console.log("number of adults travelling: " + numAdults);
        var numChildren = $("#numChildren").val().trim();
        console.log("number of children travelling: " + numChildren);
        var numInfants = $("#numInfants").val().trim();
        console.log("number of infants travelling: " + numInfants);
        var queryURL = "https://developer.goibibo.com/api/search/?app_id=c1ea2a16&app_key=ba8d21d387b423781cf4a234ff1c731c&format=json&source="+origin+"&destination="+destination+"&dateofdeparture="+newDepartureDate+"&dateofarrival="+newArrivalDate+"&seatingclass="+classOfTravel+"&adults="+numAdults+"&children="+numChildren+"&infants="+numInfants+"&counter="+0;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            //$(".subheader-flights").text(JSON.stringify(response));
            for(var i = 0; i < 50; i++){
                var rowNumber = $("<td>").addClass("p-rownumber").text(i);
                var pOrigin = $("<td>").addClass("p-origin").text(response.data.onwardflights[i].origin);
                var pDestination = $("<td>").addClass("p-destination").text(response.data.onwardflights[i].destination);
                var pAirline = $("<td>").addClass("p-airline").text(response.data.onwardflights[i].airline);
                var pCarrierId = $("<td>").addClass("p-carrierid").text(response.data.onwardflights[i].carrierid);
                var pFlightNo = $("<td>").addClass("p-flightno").text(response.data.onwardflights[i].flightno);
                var pBookingClass = $("<td>").addClass("p-bookingclass").text(response.data.onwardflights[i].bookingclass);
                var pSeatingClass = $("<td>").addClass("p-seatingclass").text(response.data.onwardflights[i].seatingclass);
                var pDepDate = $("<td>").addClass("p-depdate").text(response.data.onwardflights[i].depdate);
                var pDepTime = $("<td>").addClass("p-deptime").text(response.data.onwardflights[i].deptime);
                var pArrDate = $("<td>").addClass("p-arrdate").text(response.data.onwardflights[i].arrdate);
                var pArrTime = $("<td>").addClass("p-arrtime").text(response.data.onwardflights[i].arrtime);
                var pDepTerminal = $("<td>").addClass("p-depterminal").text(response.data.onwardflights[i].depterminal);
                var pArrTerminal = $("<td>").addClass("p-arrterminal").text(response.data.onwardflights[i].arrterminal);
                var pDuration = $("<td>").addClass("p-duration").text(response.data.onwardflights[i].duration);
                $(".flights-table-body").append(rowNumber, pOrigin, pDestination, pAirline, pCarrierId, pFlightNo, pBookingClass, pSeatingClass, pDepDate, pDepTime, pArrDate, pArrTime, pDepTerminal, pArrTerminal, pDuration);
            }
            
            console.log(response);
        });
}
$("#flight-form").on("submit", displayFlightInfo);
$(".button").on("click",function(event){
    event.preventDefault();
    displayFlightInfo(event);
});