// event listener for search bar
var searchButton = document.querySelector("#searchButton");
var searchInput = document.querySelector("#searchInput");
var movieReview = document.querySelector("#movieInput");


var submitMovieSearch = function () {
  var movieSearch = searchInput.value.trim();
  console.log(movieSearch);
  // axios get pass in params
  window.location.href = `?search=${movieSearch}`
  // window.location.reload(true)
};
searchButton.addEventListener("click", submitMovieSearch);

var completeMovieReview = function () {
  window.location.href = '/reviews';
    // window.location.reload(true)
};
movieReview.addEventListener("click", completeMovieReview);
