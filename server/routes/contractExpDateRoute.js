const express = require('express');
const dateController = require('../controllers/dateController');
const expirationDateRouter = express.Router();

expirationDateRouter.get('/getTodayExpDate', dateController.getTodayExpDates);
expirationDateRouter.get('/getPastExpDate', dateController.getPastExpDates);

module.exports = expirationDateRouter