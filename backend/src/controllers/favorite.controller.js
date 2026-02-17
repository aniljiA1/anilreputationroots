exports.toggleFavorite = async (req, res, next) => {
  try {
    const user = req.user;
    const productId = req.params.productId;

    const index = user.favorites.indexOf(productId);

    if (index === -1) {
      user.favorites.push(productId);
    } else {
      user.favorites.splice(index, 1);
    }

    await user.save();

    res.json(user.favorites);
  } catch (error) {
    next(error);
  }
};
