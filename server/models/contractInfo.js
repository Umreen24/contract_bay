
const mongoose = require('mongoose');

const contractInfoSchema = new mongoose.Schema({
    customerName: {
        type: String, 
        required: [true, 'Customer must have a first name!']
    },

    customerAccountNumber: {
        type: Number,
        minlength: 6,
        maxlength: 6,
        required: [true, 'Customer must have an account number!']
    },

    esiId: {
        type: Number,
        minlength: 12,
        maxlength: 18,
        required: [true, 'Customer must have an ESI ID']
    },

    customerAddress: {
        type: String, 
        required: [true, 'Customer must have an address!']
    },

    planName: {
        type: String,
        required: [true, 'Customer must be on a plan!']
    },

    planLength: {
        type: Number,
        required: [true, 'Plan must have a term length!']
    },

    tdsp: {
        type: String,
        required: [true, 'Customer must have a TDSP!']
    },

    sendEmailDate: {
        type: Date,
        default: new Date(+new Date() + 45*24*60*60*1000)
    }
});

const ContractInfo = mongoose.model('ContractInfo', contractInfoSchema);
module.exports = ContractInfo;