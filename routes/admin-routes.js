require('dotenv').config();
const express = require('express');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
const requireAuth = require('../helpers/requireAuth');
const {
  getAdminPanel,
  getLoginForm,
  login,
  logout,
  getDashboard,
} = require('../controllers/admin-controller');

const router = express.Router();

const oneDay = 1000 * 60 * 60 * 24;

router.use(
  sessions({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: oneDay },
  }),
);
router.use(cookieParser());
router.use(express.urlencoded({ extended: true }));

router.get('/admin-panel', getAdminPanel);
router.get('/admin-panel/login', getLoginForm);
router.post('/login', login);
router.get('/logout', logout);
router.all('/admin-panel/*', requireAuth, (req, res, next) => {
  next();
});
router.get('/admin-panel/dashboard', getDashboard);

module.exports = router;
