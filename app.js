$("#search-butt").on("click", function() {
    
    var queryURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&location=42.3675294,-71.186966&radius=10000&key=AIzaSyALmBnC7ujQhjXxBEIP1UCH3Lp5zFJLXb4"
   
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(data) {
        console.log(data);
    })
})