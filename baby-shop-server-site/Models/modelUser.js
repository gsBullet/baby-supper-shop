const mongoose = require('mongoose');

const modelSchema = mongoose.Schema({
    username: {
        required: true,
        type: "string",
    },
    email: {
        required: true,
        type: "string",
    
    },
    phone: {
        default: '',
        type: "string"
    },
    password: {
        default: '',
        required: true,
        type: "string",
    },
    role: {
        default:'customer',
        type: "string",
    },
})

const userModel = mongoose.model('userModel',modelSchema);
module.exports = userModel;