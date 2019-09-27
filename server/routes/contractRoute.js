const express = require('express');
const contractController = require('../controllers/contractController');
const contractRouter = express.Router();

contractRouter.post('/add-contract', contractController.addContractInfo);
contractRouter.get('/all-contracts', contractController.getContracts);
contractRouter.get('/:planLength', contractController.filterContracts);



module.exports = contractRouter;