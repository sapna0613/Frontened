
const mongoose = require('mongoose');

const CreateOperationManagerSchema = new mongoose.Schema({
    Name: { type: String, default: '3' },
    Roles: { type: String },
    Status: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('OperationManager', CreateOperationManagerSchema);
