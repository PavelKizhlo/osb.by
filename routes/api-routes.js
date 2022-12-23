const express = require('express');
const sendToTelegram = require('../controllers/telegram');

const router = express.Router();

router.use(express.json());

router.post('/api/telegram', sendToTelegram);

module.exports = router;
