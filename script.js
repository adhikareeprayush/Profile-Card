// Initializing a variable 'count' to store the number of likes
var count = 0;

// Getting a reference to the "like" button element by its ID
var button = document.getElementById("button-like");

// Getting a reference to the element that displays the like count by its ID
var countDisplay = document.getElementById("like-count");

// Adding a click event listener to the "like" button
button.addEventListener("click", function() {
    // Incrementing the like count when the button is clicked
    count++;

    // Updating the content of the element that displays the like count
    countDisplay.innerHTML = count;
});
