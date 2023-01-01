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
  getSEOEditor,
  updateSEOPage,
} = require('../controllers/admin-controller');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/assets/images/slides');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage, fileFilter });

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
router.get('/admin-panel/seo-list/edit/:page', getSEOEditor);
router.put('/admin-panel/seo-list/edit/:page', updateSEOPage);

// Slides
router.get('/admin-panel/slider-list', getSliderList);
router.post('/admin-panel/slider-list', upload.single('recfile'), addSlide);
router.delete('/admin-panel/slider-list/:id', deleteSlide);

// Cards
router.get('/admin-panel/card-list', getCardList);

module.exports = router;
