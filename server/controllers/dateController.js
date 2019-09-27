const ContractInfo = require('../models/contractInfo');
const moment = require('moment');


exports.getTimeContract = async(req, res) => {
    
    const getTermExpDate = req.params.getTermExpDate
    const date = moment().add(45, 'days').format('MM/DD/YYYY')
    console.log(date)
    const expiringContract = await ContractInfo.find({$and: [{sendEmailDate:{'$gte': date}}, {planLength: {'$eq': getTermExpDate}}]})
    
    res.json({expiringContract: expiringContract})
};

/*
exports.getTodayExpDates = async(req, res) => {
    
    const date = moment().format('MM/DD/YYYY')
    const expiringContract = await ContractInfo.find({sendEmailDate:{
        '$gte': date
    }})

    res.json({expiringContract: expiringContract})
};*/

/*
exports.getPastExpDates = async(req, res) => {

    const getPastDate = moment().subtract(1, 'day').format('MM/DD/YYYY')
    const expiredContract = await ContractInfo.find({sendEmailDate: {
        '$lte': getPastDate
    }})

    res.json({expiredContract: expiredContract})
}*/