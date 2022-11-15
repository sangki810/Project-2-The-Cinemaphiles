const router = require('express').Router();
const { User, Movie } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.send("<h1>Cinemafiles Route!</h1>");
});

router.get('/', async (req, res) => {
  try {
    const movieData = await Movie.findAll({
      include: [
        {
          model: User,
          attributes: ['name']
        },
      ]
    });

    const movies = movieData.map((post) => post.get({ plain: true }));
    
    res.render('homepage', {
      movies,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
