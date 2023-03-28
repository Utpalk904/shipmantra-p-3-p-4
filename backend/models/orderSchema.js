const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    senderName: {
        type: String,
        required: true
    },
    senderLocation: {
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
    receiverName: {
        type: String,
        required: true
    },
    receiverLocation: {
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
    orders: [
        {
            length: {
                type: Number,
                required: true,
                default: 1
            },
            breadth: {
                type: Number,
                required: true,
                default: 1
            },
            height: {
                type: Number,
                default: 1,
                required: true
            },
            weight: {
                type: Number,
                default: 1,
                required: true
            },
            productItems: [
                {
                    item: {
                        type: mongoose.Schema.ObjectId,
                        ref: 'Product',
                        required: true
                    },
                    quantity: {
                        type: Number,
                        required: true,
                        default: 1
                    }
                }
            ]
        }
    ],
    trips: [
        {
            trip: {
                type: mongoose.Schema.ObjectId,
                ref: 'Trip',
                required: true
            }
        }
    ]
})

module.exports = mongoose.model("Order", orderSchema);