const ContractInfo = require('../models/contractInfo');
const moment = require('moment');

exports.getTodayExpDates = async(req, res) => {
  
    const date = moment().format('MM/DD/YYYY')
    const expiringContract = await ContractInfo.find({sendEmailDate:{
        '$gte': date
    }})

    res.json({expiringContract: expiringContract})
};