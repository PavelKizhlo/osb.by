require('dotenv').config();
const express = require('express');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
const createPath = require('../helpers/create-path');
const requireAuth = require('../helpers/requireAuth');
const checkAuth = require('../helpers/checkAuth');

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

router.get('/admin-panel', (req, res) => {
  res.redirect('/admin-panel/login');
});

router.get('/admin-panel/login', (req, res) => {
  res.sendFile(createPath('admin-views/login-form.html'));
});

router.post('/login', (req, res) => {
  const isAuth = checkAuth(req.body);

  if (isAuth) {
    const session = req.session;
    session.userId = req.body.admin;

    res.redirect('/admin-panel/dashboard');
  } else {
    res.redirect('/admin-panel');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/admin-panel');
});

router.all('/admin-panel/*', requireAuth, (req, res, next) => {
  next();
});

router.get('/admin-panel/dashboard', (req, res) => {
  res.sendFile(createPath('admin-views/dashboard.html'));
});

module.exports = router;
