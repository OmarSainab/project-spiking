const mongoose = require('mongoose')

const habitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },  
    priority: { 
        type: Number,
        required: true,
    },
    completionDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Habit', habitSchema)