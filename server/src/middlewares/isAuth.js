module.exports = function (req, res, next) {
    if (req.session.bee) {
      next();
    } else {
      res.status(403).json({ msg: 'Unauthorized' });
    }
  };
  