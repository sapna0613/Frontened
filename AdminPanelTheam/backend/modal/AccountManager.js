const mongoose = require('mongoose');

const AccountManagerSchema = new mongoose.Schema({
    Name: { type: String, default: '2' },
    Roles: { type: String },
    Status: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Account', AccountManagerSchema);
