const ContractInfo = require('../models/contractInfo');

exports.addContractInfo = async(req, res) => {
    try{
        const contract = new ContractInfo(req.body)
        await contract.save()
        res.json({contract, message: 'Contract information saved!'})
    } catch(error) {
        res.send(error)
    }
};

exports.getContracts = async(req, res) => {
    try{
        const contracts = await ContractInfo.find({})
        res.json({contracts: contracts})
    } catch(error) {
        res.json({error: 'Unable to get contracts!'})
    }
};