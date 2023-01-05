require('dotenv').config();
const express = require('express');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const requireAuth = require('../helpers/requireAuth');
const fileFilter = require('../helpers/fileFilter');
const {
  getAdminPanel,
  getLoginForm,
  login,
  logout,
  getSEOList,
  getSliderList,
  getCardList,
  deleteSlide,
  addSlide,
  editSEO,
  updateSEO,
  addCard,
  createCard,
  editCard,
  updateCard,
  deleteCard,
} = require('../controllers/admin-controller');

const router = express.Router();

const slideStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/assets/images/slides');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const cardImgStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/assets/images/cards');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const slideUpload = multer({ storage: slideStorage, fileFilter });
const cardImgUpload = multer({ storage: cardImgStorage, fileFilter });

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
router.use(express.json());

// Login form
router.get('/admin-panel', getAdminPanel);
router.get('/admin-panel/login', getLoginForm);

// Login / Logout
router.post('/login', login);
router.get('/logout', logout);

// Auth check
router.all('/admin-panel/*', requireAuth, (req, res, next) => {
  next();
});

// SEO
router.get('/admin-panel/seo-list', getSEOList);
router.get('/admin-panel/seo-list/:page', editSEO);
router.put('/admin-panel/seo-list/:page', updateSEO);

// Slides
router.get('/admin-panel/slider-list', getSliderList);
router.post(
  '/admin-panel/slider-list',
  slideUpload.single('recfile'),
  addSlide,
);
router.delete('/admin-panel/slider-list/:id', deleteSlide);

// Cards
router.get('/admin-panel/card-list', getCardList);
router.get('/admin-panel/card-list/new', createCard);
router.post(
  '/admin-panel/card-list/new',
  cardImgUpload.single('card-img-file'),
  addCard,
);
router.get('/admin-panel/card-list/:id', editCard);
router.put(
  '/admin-panel/card-list/:id',
  cardImgUpload.single('card-img-file'),
  updateCard,
);
router.delete('/admin-panel/card-list/:id', deleteCard);

module.exports = router;
