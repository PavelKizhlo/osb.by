const createPath = require('../helpers/create-path');
const checkAuth = require('../helpers/checkAuth');
const db = require('../db/db');

const handleError = (err, res) => {
  console.error(err);
  res.status(500).send(`<h1>${err.message}</h1>`);
};

const getAdminPanel = (req, res) => {
  res.redirect('/admin-panel/login');
};

const getLoginForm = (req, res) => {
  res.render(createPath('admin-views/login-form.ejs'));
};

const getSEOList = async (req, res) => {
  try {
    const heads = await db.query('SELECT * FROM head');
    res.render(createPath('admin-views/seo-list.ejs'), { heads });
  } catch (err) {
    handleError(err, res);
  }
};

const getSliderList = async (req, res) => {
  try {
    const slides = await db.query('SELECT * FROM slider');
    res.render(createPath('admin-views/slider-list.ejs'), { slides });
  } catch (err) {
    handleError(err, res);
  }
};

const getCardList = async (req, res) => {
  try {
    const cards = await db.query('SELECT * FROM card');
    res.render(createPath('admin-views/card-list.ejs'), { cards });
  } catch (err) {
    handleError(err, res);
  }
};

const login = (req, res) => {
  const isAuth = checkAuth(req.body);

  if (isAuth) {
    const session = req.session;
    session.userId = req.body.admin;

    res.redirect('/admin-panel/card-list');
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
  getSEOList,
  getSliderList,
  getCardList,
  login,
  logout,
};
