const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const reviewRoutes = require('./review-routes.js');

router.use('/user', userRoutes);
router.use('/review', reviewRoutes);

module.exports = router;