const express = require('express');
const {
  getHomePage,
  getCatalogPage,
  getAboutPage,
  getDeliveryPage,
  getContactsPage,
  getProductPage,
} = require('../controllers/user-controller');

const router = express.Router();

router.get(['/', '/home', '/index'], getHomePage);
router.get('/catalog', getCatalogPage);
router.get('/about', getAboutPage);
router.get('/delivery', getDeliveryPage);
router.get('/contacts', getContactsPage);
router.get('/catalog/:id', getProductPage);

module.exports = router;
