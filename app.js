require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const db = require('./db/db');
const userRoutes = require('./routes/user-routes');
const adminRoutes = require('./routes/admin-routes');
const apiRoutes = require('./routes/api-routes');
const { get404 } = require('./controllers/user-controller');

const errorMsg = chalk.bgWhite.redBright;
const successMsg = chalk.bgWhite.greenBright;
const logMsg = chalk.cyanBright;

db.connect();

const app = express();

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

app.use('/public', express.static(path.resolve(__dirname, 'public')));

app.use(userRoutes);
app.use(adminRoutes);
app.use(apiRoutes);

app.get('*', get404);
