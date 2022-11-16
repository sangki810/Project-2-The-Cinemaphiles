const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const reviewRoutes = require('./review-routes.js');
const movieRoutes = require('./movie-routes.js');


router.use('/user', userRoutes);
router.use('/review', reviewRoutes);
router.use('/movie', movieRoutes);

module.exports = router;