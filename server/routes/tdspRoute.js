const express = require('express');
const tdspController = require('../controllers/tdspController');
const tdspRouter = express.Router();

tdspRouter.get('/:tdsp', tdspController.getTdsp);

module.exports = tdspRouter;