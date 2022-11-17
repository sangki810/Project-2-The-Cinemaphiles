const Review = require('./Review');
const User = require('./User');
const Movie = require('./Movie');

User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
});

Movie.hasMany(Review, {
  foreignKey: 'movie_id',
  onDelete: 'CASCADE',
});

module.exports = {
    Review,
    User,
    Movie,
  };

