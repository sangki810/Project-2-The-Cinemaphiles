const Review = require('./Review');
const User = require('./User');
const Movie = require('./Movie');

User.hasMany(Review, {
  foreignKey: 'user_id',
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = {
    Review,
    User,
    Movie,
  };

