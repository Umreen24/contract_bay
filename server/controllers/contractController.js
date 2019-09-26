const ContractInfo = require('../models/contractInfo');
const moment = require('moment');

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

exports.filterContracts = async(req,res) => {

    const planLength = req.params.planLength
    const contract = await ContractInfo.find({planLength: {
        '$eq': planLength,
    }})

    res.json({contract: contract})

};

exports.sendEmailDate = async(req, res) => {

    const sendEmailDate = await ContractInfo.find({sendEmailDate: {
        '$gte': new Date('2019-11-09T00:00:00.000Z')
    }})
    res.json({sendEmailDate: sendEmailDate})
}