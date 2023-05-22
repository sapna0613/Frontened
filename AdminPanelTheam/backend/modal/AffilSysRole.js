const mongoose = require('mongoose');

const AffileSysRoleSchema = new mongoose.Schema({
    Name: { type: String, default: '1' },
    Roles: { type: String },
    Status: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('affilSysRole', AffileSysRoleSchema);
