var count = 0;
      var button = document.getElementById("button-like");
      var countDisplay = document.getElementById("like-count");
      button.addEventListener("click", function() {
         count++;
         countDisplay.innerHTML = count;
      });