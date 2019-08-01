$(document).ready(function(){

function searchLocations(location) {

    var queryURL = "https://www.triposo.com/api/20181213/tour.json?annotate=trigram:" + location + "&trigram=%3E0.2&account=YLSBAM48&token=fld3ii4oj15xegxsnyj5a8iwppb2bgou"
    console.log (queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        console.log(response);
        var locationName = $("<h1>").text(response);

        $("#locations-appear-here").empty();
        $("#locations-appear-here").append(locationName);
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

    //queryurll="https://www.triposo.com/api/20181213/tour.json?annotate=trigram:Amsterdam&trigram=%3E0.2&account=Bwilkie91&token=jtxzznrrzatq62syjh1v3dv4uynh15sp"
    //console.log (queryurll)
    
    //fld3ii4oj15xegxsnyj5a8iwppb2bgou
   
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response){
       console.log(queryURL);
       console.log(response);

        var results = response.data;

        $("#locations-appear-here").empty();

        for (var i = 0; i < results; i++) {
            var resultsDiv = $("<div>");
            var p = $("<p>").text("Results: " + results[i]);
            var testing = results[i].name.url;

            resultsDiv.attr("src", testing);
            resultsDiv.addClass("location");
            resultsDiv.append(p);
            resultsDiv.append(testing);

            $("#locations-appear-here").append(resultsDiv);

        }

    })

    })

})