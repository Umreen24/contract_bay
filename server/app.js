//packages
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

//files
const AppError = require('./utils/AppError');
const userRouter = require('./routes/userRoute');
const contractRouter = require('./routes/contractRoute');
const expirationDateRouter = require('./routes/contractExpirationRoute');

//middleware
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());


//routes
app.use('/users', userRouter);
app.use('/contracts', contractRouter);
app.use('/exp-date', expirationDateRouter);

//catch errors
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
});

module.exports = app;