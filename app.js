require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const userRoutes = require('./routes/user-routes');
const adminRoutes = require('./routes/admin-routes');
const apiRoutes = require('./routes/api-routes');

const errorMsg = chalk.bgWhite.redBright;
const successMsg = chalk.bgWhite.greenBright;
const logMsg = chalk.cyanBright;

const app = express();

const PUBLIC_DIR = path.resolve(__dirname, 'public');

app.set('view engine', 'ejs');

app.listen(process.env.PORT, (err) => {
  err
    ? console.log(errorMsg(err.message))
    : console.log(successMsg(`listening port ${process.env.PORT}`));
});

app.use(
  morgan(
    logMsg(':method :url :status :res[content-length] - :response-time ms'),
  ),
);

app.use('/public', express.static(PUBLIC_DIR));

app.use(userRoutes);
app.use(adminRoutes);
app.use(apiRoutes);
