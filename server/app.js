//packages
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

//files
const AppError = require('./utils/AppError');
const userRouter = require('./routes/userRoute');
const contractRouter = require('./routes/contractRoute');

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/users', userRouter);
app.use('/contracts', contractRouter);

//catch errors
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
});

module.exports = app;