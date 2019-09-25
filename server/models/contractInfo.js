
const mongoose = require('mongoose');

const contractInfoSchema = new mongoose.Schema({
    customerName: {
        type: String, 
        required: [true, 'Customer must have a first name!']
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

    expirationDate: {
        type: Date,
        required: [true, 'Customer plan must have an expiration date!']
    },
});

const ContractInfo = mongoose.model('ContractInfo', contractInfoSchema);
module.exports = ContractInfo;