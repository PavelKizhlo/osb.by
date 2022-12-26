const db = require('../db/db');
const createPath = require('../helpers/create-path');

const handleError = (err, res) => {
  console.error(err);
  res.status(500).render(createPath('500.ejs'));
};

const getHomePage = async (req, res) => {
  try {
    const head = await db.query('SELECT * FROM head WHERE page = "index"');
    const cards = await db.query('SELECT * FROM card WHERE is_popular = 1');
    const slides = await db
      .query('SELECT * FROM slider')
      .then((res) => res.map((item) => item.img_src));
    res.render(createPath('index.ejs'), { cards, slides, head: head[0] });
  } catch (err) {
    handleError(err, res);
  }
};

const getCatalogPage = async (req, res) => {
  try {
    const head = await db.query('SELECT * FROM head WHERE page = "catalog"');
    const cards = await db.query('SELECT * FROM card');
    const thickness = await db
      .query('SELECT DISTINCT thickness FROM card ORDER BY thickness ASC')
      .then((res) => res.map((item) => item.thickness));
    res.render(createPath('catalog.ejs'), { cards, thickness, head: head[0] });
  } catch (err) {
    handleError(err, res);
  }
};

const getDeliveryPage = async (req, res) => {
  try {
    const head = await db.query('SELECT * FROM head WHERE page = "delivery"');
    res.render(createPath('delivery.ejs'), { head: head[0] });
  } catch (err) {
    handleError(err, res);
  }
};

const getAboutPage = async (req, res) => {
  try {
    const head = await db.query('SELECT * FROM head WHERE page = "about"');
    res.render(createPath('about.ejs'), { head: head[0] });
  } catch (err) {
    handleError(err, res);
  }
};

const getContactsPage = async (req, res) => {
  try {
    const head = await db.query('SELECT * FROM head WHERE page = "contacts"');
    res.render(createPath('contacts.ejs'), { head: head[0] });
  } catch (err) {
    handleError(err, res);
  }
};

const get404 = async (req, res) => {
  try {
    const head = await db.query('SELECT * FROM head WHERE page = "404"');
    res.render(createPath('404.ejs'), { head: head[0] });
  } catch (err) {
    handleError(err, res);
  }
};

module.exports = {
  getHomePage,
  getCatalogPage,
  getDeliveryPage,
  getAboutPage,
  getContactsPage,
  get404,
};
