const ContractInfo = require('../models/contractInfo');
const moment = require('moment');

exports.getTodayExpDates = async(req, res) => {
  
    const date = moment().format('MM/DD/YYYY')
    const expiringContract = await ContractInfo.find({sendEmailDate:{
        '$gte': date
    }})

    res.json({expiringContract: expiringContract})
};

/*
exports.getPastExpDates = async(req, res) => {

    const getPastDate = moment().format('MM/DD/YYYY')
    const expiredContract = await ContractInfo.find({sendEmailDate: {
        '$lte': getPastDate
    }})

    res.json({expiredContract: expiredContract})
}*/