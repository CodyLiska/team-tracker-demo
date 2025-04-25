const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    psychological: {
        type: Object,
        required: true
    },
    physical: {
        type: Object,
        required: true
    },
    socialEmotional: {
        type: Object,
        required: true
    },
    technical: {
        type: Object,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Player', playerSchema);