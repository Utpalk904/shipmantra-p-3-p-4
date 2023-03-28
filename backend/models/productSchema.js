const mongoose = require('mongoose');

const prouductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: [true, 'Please Enter imageUrl as well']
    }
});

module.exports = mongoose.model("Product", prouductSchema);