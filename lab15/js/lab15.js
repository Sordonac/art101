/*
 * Author:    Skye Crockett & Matthew Oropeza
 * Created:   22 November 2022
 * License: Public Domain
 */
 // Using the core $.ajax() method
$("#activate").click(function(){
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://api.chucknorris.io/jokes/random",
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
      console.log(data);
      result = JSON.stringify(data);
      $("#output").append(result);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        alert("Error:", textStatus, errorThrown);
        console.log("Error:", textStatus, errorThrown);
    }

  })

})
