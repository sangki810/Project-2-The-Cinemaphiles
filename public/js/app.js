// event listener for search bar
var searchButton = document.querySelector("#searchButton");
var searchInput = document.querySelector("#searchInput");
var movieReview = document.querySelector("#movieInput");
var movieImage = document.querySelector("#movieImage");


var submitMovieSearch = function () {
  var movieSearch = searchInput.value.trim();
  console.log(movieSearch);
  // axios get pass in params
  window.location.href = `?search=${movieSearch}`
  // window.location.reload(true)
};
searchButton.addEventListener("click", submitMovieSearch);

var completeMovieReview = function () {
  window.location.href = `/api/review`;
    // window.location.reload(true)
};
movieReview.addEventListener("click", completeMovieReview);

var completeMovieImageReview = function () {
  window.location.href = `/api/review`;
    // window.location.reload(true)
};
movieImage.addEventListener("click", completeMovieImageReview);
