const express = require('express');
const contractController = require('../controllers/contractController');
const contractRouter = express.Router();

contractRouter.post('/add-contract', contractController.addContractInfo);
contractRouter.get('/all-contracts', contractController.getContracts);
contractRouter.delete('/:id', contractController.deleteContract);

module.exports = contractRouter;