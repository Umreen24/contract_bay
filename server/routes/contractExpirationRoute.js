const express = require('express');
const dateController = require('../controllers/dateController');
const expirationDateRouter = express.Router();

expirationDateRouter.get('/:getTermExpDate', dateController.getTimeContract);
// expirationDateRouter.get('/getTodayExpDate', dateController.getTodayExpDates);

module.exports = expirationDateRouter