// This array will store all the movies the user enters
let movieList = [];

// Function to add a movie to the list
function addMovie() {
  // Grab the input element from the page
  const input = document.getElementById('movieInput');
  // Get what the user typed and remove spaces from start/end
  const movie = input.value.trim();

  // If user typed something
  if (movie) {
    // Add movie to the array
    movieList.push(movie);
    // Clear the text box so it's ready for next input
    input.value = '';
    // Let the user know it worked
    alert(`"${movie}" added to the list.`);
  } else {
    // If nothing was typed, tell them
    alert("Please enter a movie title.");
  }
}

// Function to show the list of movies
function displayMovies() {
  // Get the div where we will put the list
  const displayDiv = document.getElementById('movieDisplay');

  // If the list is empty
  if (movieList.length === 0) {
    displayDiv.innerHTML = "<p>No movies in the list.</p>";
    return;
  }

  // Build a string of HTML with all the movies in <li> tags
  let html = "<h3>Movie List:</h3><ul>";
  for (const movie of movieList) {
    html += `<li>${movie}</li>`;
  }
  html += "</ul>";

  // Put the HTML string inside the display div
  displayDiv.innerHTML = html;
}

// Function to clear the movie list
function resetList() {
  // Ask before clearing, in case they clicked by mistake
  if (confirm("Are you sure you want to clear the movie list?")) {
    // Empty the array
    movieList = [];
    // Clear the display
    document.getElementById('movieDisplay').innerHTML = "";
  }
}
