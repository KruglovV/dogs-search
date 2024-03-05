const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    description: String,
    missingSince: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Dog', dogSchema);
