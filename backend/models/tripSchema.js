const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    shipperName: {
        type: String,
        required: true
    },
    startLocation: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    endLocation: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point',
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    tripStatus: {
        type: String,
        default: 'Not Started',
        enum: ['Not Started', 'Out for Pickup', 'In transit', 'Out for delivery', 'Delivered']
    }
});

module.exports = mongoose.model("Trip", tripSchema);