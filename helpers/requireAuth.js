const requireAuth = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/admin-panel');
  }
};

module.exports = requireAuth;
