$(document).ready(function(){

    var queryURL = "https://developers.zomato.com/api/v2.1/&api_key=0a2997fca00a53b5e2ced3c26766ef4d";
    var wiki = "https://en.wikipedia.org/w/api.php"

console.log (queryURL);
console.log(wiki);
   
   $.ajax({
        url: queryURL,
        method: "GET"
    })

})