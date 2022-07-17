const mongoose = require('mongoose');
const nomineeSchema = require('../models/nominee')
const pollingSchema = new mongoose.Schema({
    candidateId: { type: mongoose.Schema.Types.ObjectId, ref: nomineeSchema },
    
},
{ timestamps: true });
const pollingRecord = mongoose.model('polling', pollingSchema);
module.exports = pollingRecord;