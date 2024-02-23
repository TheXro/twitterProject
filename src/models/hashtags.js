const mongoose = require('mongoose');

const hashtagSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },
    tweet: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }]
}, { timestamps: true });