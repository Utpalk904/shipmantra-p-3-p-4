const Order = require('../models/orderSchema');
const Trip = require('../models/tripSchema');

exports.createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        return res.status(201).json({
            success: true,
            order
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error
        });
    }
}

exports.getAllOrders = async (req, res) => {
    try {
        const orderCount = await Order.countDocuments();
        const orders = await Order.find();

        return res.status(200).json({
            success: true,
            orders,
            orderCount
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error
        });
    }
}

exports.getSingleOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({
                success: false,
                message: "order not found"
            });
        }

        return res.status(200).json({
            success: true,
            order
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error
        });
    }
}

exports.updateTripStatus = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({
                success: false,
                message: "order not found"
            });
        }
        const len = order.trips.length;
        let isDelivered = false;
        for (let i = 0; i < len; i++) {
            const currentStatus = await updateStatus(order.trips[i].trip, i, len);
            if (currentStatus === 'Already Delivered') {
                // console.log("first-1");
                isDelivered = true;
                // console.log("first-2");
                break;
            }
        }
        await order.save({ validateBeforeSave: false });

        if (isDelivered) {
            return res.status(200).json({
                success: false,
                message: 'Already delivered'
            });
        }
        return res.status(200).json({
            success: true,
            message: "Status Updated"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error
        });
    }
}

const updateStatus = async (tripId, tripIndex, length) => {
    try {
        const trip = await Trip.findById(tripId);
        if (!trip) {
            throw new Error(`Trip not found`);
        }
        if (trip.tripStatus === "Delivered" && tripIndex == length - 1) {
            // console.log("already");
            return 'Already Delivered';
        }
        const statusIndex = await Trip.schema.path('tripStatus').enumValues.indexOf(trip.tripStatus);

        if (statusIndex < Trip.schema.path('tripStatus').enumValues.length - 1) {
            trip.tripStatus = Trip.schema.path('tripStatus').enumValues[statusIndex + 1];
            await trip.save({ validateBeforeSave: false });
        }

        return trip.tripStatus;

    } catch (error) {
        console.log(error);
    }
}