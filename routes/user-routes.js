const express = require('express');
const createPath = require('../helpers/create-path');
const db = require('../db/db');

const router = express.Router();

router.get(['/', '/home', '/index'], async (req, res) => {
  try {
    const cards = await db.query('SELECT * FROM card WHERE is_popular = 1');
    const slides = await db
      .query('SELECT * FROM slider')
      .then((res) => res.map((item) => item.img_src));
    res.render(createPath('index.ejs'), { cards, slides });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.toString() });
  }
});

router.get('/catalog', async (req, res) => {
  try {
    const cards = await db.query('SELECT * FROM card');
    const thickness = await db
      .query('SELECT DISTINCT thickness FROM card ORDER BY thickness ASC')
      .then((res) => res.map((item) => item.thickness));
    res.render(createPath('catalog.ejs'), { cards, thickness });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.toString() });
  }
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
