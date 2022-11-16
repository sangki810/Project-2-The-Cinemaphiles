const router = require("express").Router();
const { User, Movie } = require("../models");
const withAuth = require("../utils/auth");
const axios = require("axios");

// router.get('/', (req, res) => {
//     res.send("./views");
// });

router.get("/", async (req, res) => {
  console.log(req.query.search);
  try {
    const results = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
        params: {
          api_key: "b8ee7a106909a7a297e5b0ca3b261018",
          language: "en-US",
        },
      }
    );
    let searchResults = [];
    if (req.query.search) {
      searchResults = await axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
          query: req.query.search,
          api_key: "b8ee7a106909a7a297e5b0ca3b261018",
          language: "en-US",
        },
      });
      searchResults = searchResults.data.results
    }

    // console.log(results.data.results);

    // const movieData = await Movie.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name']
    //     },
    //   ]
    // });

    // const movies = movieData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      movies: results.data.results,
      movieSearchResults: searchResults,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

module.exports = router;
