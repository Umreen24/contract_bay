const ContractInfo = require('../models/contractInfo');

exports.getTdsp = async(req, res) => {
    
    const tdsp = req.params.tdsp
    console.log(tdsp)
    const contract = await ContractInfo.find({tdsp: {
        '$eq': tdsp,
    }})
    
    res.json({contract: contract})
};