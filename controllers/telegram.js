const http = require('request');
const createMsg = require('../helpers/create-msg');

const sendToTelegram = async (req, res) => {
  const encodedMsg = createMsg(req.body);

  http.post(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&parse_mode=html&text=${encodedMsg}`,
    function (error, tgRes) {
      if (tgRes.statusCode === 200) {
        res.status(200).json({ status: 'ok', message: 'Успешно отправлено!' });
      }
      if (tgRes.statusCode !== 200) {
        res.status(400).json({ status: 'error', message: 'Произошла ошибка!' });
      }
    },
  );
};

module.exports = sendToTelegram;
