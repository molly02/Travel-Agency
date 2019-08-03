$(document).ready(function(){

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
        $("#location").empty();
        
    for (var i = 0; i < results.length; i++) {
        // separate rows, ,ed etc.
       var card = $("<div>").addClass("row small-up-1 medium-up-2 large-up-3").addClass("small-up-1");
       //var cardCol = $("<div>").addClass("column");
       var cardCall = $("<div>").addClass("column callout");
       // use for css card title, can change p tag to what i need
       var title = $("<h3>").addClass("card-title").text(results[i].name);
    //var link = $("<a>").attr("href",results[i].vendor_tour_url).text(title);
       var image = $("<img>").attr("src", results[i].images["0"].source_url);
       var price = $("<p>").addClass("card-title").text("Price: " + results[i].price.amount + " " + results[i].price.currency);
       //var currency = $("<p>").addClass("card-title").text(results[i].price.currency);
       //open link in new tab?
      var link = $("<a>").attr("href",results[i].vendor_tour_url).text("Find out More!");
      
       // add in order what to appear on card next links
        //card.append(cardCol);
        card.append(cardCall);
        cardCall.append(title, image, price, link);

        $("#location").append(card);
    }
      
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

        var results = response.results;

        $("#location").empty();


        for (var i = 0; i < results.length; i++) {
            // separate rows, ,ed etc.
            var card = $("<div>").addClass("row small-up-1 medium-up-2 large-up-3").addClass("small-up-1");
            var cardCol = $("<div>").addClass("column");
            var cardCall = $("<div>").addClass("callout");
            // use for css card title, can change p tag to what i need
            var title = $("<h3>").addClass("card-title").text(results[i].name);
         //var link = $("<a>").attr("href",results[i].vendor_tour_url).text(title);
            var image = $("<img>").attr("src", results[i].images["0"].source_url);
            var price = $("<p>").addClass("card-title").text("Price: " + results[i].price.amount + " " + results[i].price.currency);
            //var currency = $("<p>").addClass("card-title").text(results[i].price.currency);
            //open link in new tab?
           var link = $("<a>").attr("href",results[i].vendor_tour_url).text("Find out More!");
           
            // add in order what to appear on card next links
             card.append(cardCol);
             card.append(cardCall);
             cardCall.append(title, image, price, link);
     
             $("#location").append(card);
    
        }
  
    })

    })

})