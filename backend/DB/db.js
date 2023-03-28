const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
    await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
    console.log(`MongoDB connected with server ${mongoose.connection.host}`);
}

module.exports = connectDB;