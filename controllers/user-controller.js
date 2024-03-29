const db = require('../db/db');
const createPath = require('../helpers/create-path');

const handleError = (err, res) => {
  console.error(err);
  res.status(500).render(createPath('500.ejs'));
};

const getHead = async (page) =>
  await db.query(`SELECT * FROM head WHERE page = '${page}'`);

const getHomePage = async (req, res) => {
  try {
    const head = await getHead('index');
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
    const head = await getHead('catalog');
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
    const head = await getHead('delivery');
    res.render(createPath('delivery.ejs'), { head: head[0] });
  } catch (err) {
    handleError(err, res);
  }
};

const getAboutPage = async (req, res) => {
  try {
    const head = await getHead('about');
    res.render(createPath('about.ejs'), { head: head[0] });
  } catch (err) {
    handleError(err, res);
  }
};

const getContactsPage = async (req, res) => {
  try {
    const head = await getHead('contacts');
    res.render(createPath('contacts.ejs'), { head: head[0] });
  } catch (err) {
    handleError(err, res);
  }
};

const getProductPage = async (req, res) => {
  try {
    const id = req.params.id;
    const head = await getHead('product');
    const cards = await db.query(`SELECT * FROM card WHERE id='${id}'`);
    res.render(createPath('product.ejs'), { head: head[0], card: cards[0] });
  } catch (err) {
    handleError(err, res);
  }
};

const get404 = async (req, res) => {
  try {
    const head = await getHead('404');
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
  getProductPage,
  get404,
};
