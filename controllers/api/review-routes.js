const router = require('express').Router();
const { Review } = require('../../models');

// CREATE a review
router.post('/', async (req, res) => {
  try {
    const reviewData = await Review.create(req.body);
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a review
router.delete('/:id', async (req, res) => {
  try {
    const reviewData = await Trip.destroy({
      where: { id: req.params.id }
    });
    if (!reviewData) {
      res.status(404).json({ message: 'No trip with this id!' });
      return;
    }
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;