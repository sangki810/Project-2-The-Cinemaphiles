const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.send("<h1>Cinemafiles Route!</h1>");
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
