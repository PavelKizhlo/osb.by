const createPath = require('../helpers/create-path');
const checkAuth = require('../helpers/checkAuth');

const getAdminPanel = (req, res) => {
  res.redirect('/admin-panel/login');
};

const getLoginForm = (req, res) => {
  res.sendFile(createPath('admin-views/login-form.html'));
};

const getDashboard = (req, res) => {
  res.sendFile(createPath('admin-views/dashboard.html'));
};

const login = (req, res) => {
  const isAuth = checkAuth(req.body);

  if (isAuth) {
    const session = req.session;
    session.userId = req.body.admin;

    res.redirect('/admin-panel/dashboard');
  } else {
    res.redirect('/admin-panel');
  }
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect('/admin-panel');
};

module.exports = {
  getAdminPanel,
  getLoginForm,
  getDashboard,
  login,
  logout,
};
