const express = require('express');
const createPath = require('../helpers/create-path');

const router = express.Router();

router.get(['/', '/home', '/index'], (req, res) => {
  res.render(createPath('index.ejs'));
});

router.get('/catalog', (req, res) => {
  res.render(createPath('catalog.ejs'));
});

router.get('/about', (req, res) => {
  res.render(createPath('about.ejs'));
});

router.get('/delivery', (req, res) => {
  res.render(createPath('delivery.ejs'));
});

router.get('/contacts', (req, res) => {
  res.render(createPath('contacts.ejs'));
});

module.exports = router;
