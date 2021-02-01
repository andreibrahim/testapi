const mongoose = require('mongoose');

const apitestSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'please fill name']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'please fill email']
    },
    address: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('apitest', apitestSchema);