const Trip = require('../models/tripSchema');

exports.createTrip = async (req, res) => {
    try {
        const trip = await Trip.create(req.body);
        res.status(201).json({
            success: true,
            trip
        });
    } catch (error) {
        console.log(error);
    }
}

exports.getAllTrips = async (req, res) => {
    try {
        const tripCount = await Trip.countDocuments();
        const trips = await Trip.find();

        res.status(200).json({
            success: true,
            trips,
            tripCount
        });
    } catch (error) {
        console.log(error);
    }
}