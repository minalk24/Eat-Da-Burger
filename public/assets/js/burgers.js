
$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newState = $(this).data("newdevour");
  
      var newEatingState = {
        devoured: newState
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatingState
      }).then(
        function() {
          console.log("changed eat to", newEatingState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newburger").val().trim(),
        devoured: 0, //Set to false 
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    
  });