

window.axios
  .get("https://api.themoviedb.org/3/movie/popular", {
    params: { api_key: "b8ee7a106909a7a297e5b0ca3b261018", language: "en-US" },
  })
  .then((result) => {
    console.log(result);
  });
