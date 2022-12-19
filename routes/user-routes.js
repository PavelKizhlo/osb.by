const express = require('express');
const createPath = require('../helpers/create-path');

const router = express.Router();

router.get(['/', '/home', '/index'], (req, res) => {
  res.sendFile(createPath('index'));
});

router.get('/catalog', (req, res) => {
  res.sendFile(createPath('catalog'));
});

router.get('/about', (req, res) => {
  res.sendFile(createPath('about'));
});

router.get('/delivery', (req, res) => {
  res.sendFile(createPath('delivery'));
});

router.get('/contacts', (req, res) => {
  res.sendFile(createPath('contacts'));
});

module.exports = router;
