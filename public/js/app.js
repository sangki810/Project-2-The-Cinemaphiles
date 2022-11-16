// event listener for search bar
var searchButton = document.querySelector("#searchButton");
var searchInput = document.querySelector("#searchInput");

var submitMovieSearch = function () {
  var movieSearch = searchInput.value.trim();
  console.log(movieSearch);
  // axios get pass in params

};
searchButton.addEventListener("click", submitMovieSearch);
