const mongoose = require('mongoose');
const nomineeSchema = new mongoose.Schema({
    candidate: { type: String },
    party: { type: String }
});
const nomineeRecord = mongoose.model('nominee', nomineeSchema);
module.exports = nomineeRecord;