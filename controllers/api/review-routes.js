const router = require('express').Router();
const { Review, User } = require('../../models');

// CREATE a review
router.post('/', async (req, res) => {
  try {
    const reviewData = await Review.create(req.body);
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// render all reviews
router.get('/', async (req, res) => {
  try{
    const reviewData = await Review.findAll({
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name']
      //   }
      // ]
    });

    const reviews = reviewData.map((review) => review.get({ plain: true }));
   
    res.render('reviews', {
      reviews,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// render a single review
router.get('/:id', async (req, res) => {
  try{
    const reviewData = await Review.findByPk(req.params.id, {
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name']
      //   }
      // ]
    });

    const review = reviewData.get({ plain: true });

    res.render('single-review', {
      ...review,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try{
    const reviewData = await Review.update(
      req.body,
      { where: { id: req.params.id } }
    );

    if (!reviewData) {
      res.status(404).json({ message: 'No review found with this id!' });
      return;
    }

    res.status(200).json(`Review ${req.params.id} has been updated`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a review
router.delete('/:id', async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: { id: req.params.id }
    });
    if (!reviewData) {
      res.status(404).json({ message: 'No reviews with this id!' });
      return;
    }
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;